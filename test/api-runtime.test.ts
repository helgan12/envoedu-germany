// @vitest-environment node
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import ts from "typescript";

describe("Deployed API module loading", () => {
  it("loads transpiled API files in native Node without Vite, tsx or bundling", () => {
    const cacheRoot = path.resolve("node_modules/.cache");
    fs.mkdirSync(cacheRoot, { recursive: true });
    const folder = fs.mkdtempSync(path.join(cacheRoot, "envoedu-api-"));
    const files = ["api/health.ts", "api/consultation-requests.ts", "server/app.ts", "server/routes.ts", "server/emailService.ts", "shared/consultation.ts"];
    try {
      fs.writeFileSync(path.join(folder, "package.json"), JSON.stringify({ type: "module" }));
      for (const file of files) {
        const output = path.join(folder, file.replace(/\.ts$/, ".js"));
        fs.mkdirSync(path.dirname(output), { recursive: true });
        const result = ts.transpileModule(fs.readFileSync(file, "utf8"), {
          compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
        });
        fs.writeFileSync(output, result.outputText);
      }
      const script = `
        import { createServer } from 'node:http';
        import health from './api/health.js';
        import contact from './api/consultation-requests.js';
        if (typeof health !== 'function' || typeof contact !== 'function') throw Error('Missing handler');
        const server = createServer(health);
        await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
        try {
          const response = await fetch('http://127.0.0.1:' + server.address().port + '/api/health');
          const data = await response.json();
          if (response.status !== 200 || data.status !== 'ok') throw Error('Health response failed');
          console.log('Native API runtime OK');
        } finally {
          await new Promise(resolve => server.close(resolve));
        }
      `;
      const output = execFileSync(process.execPath, ["--input-type=module", "-e", script], {
        cwd: folder, encoding: "utf8", timeout: 15000,
      });
      expect(output).toContain("Native API runtime OK");
    } finally {
      const resolved = path.resolve(folder);
      if (!resolved.startsWith(cacheRoot + path.sep)) throw new Error("Unexpected test directory");
      fs.rmSync(resolved, { recursive: true, force: true });
    }
  });
});
