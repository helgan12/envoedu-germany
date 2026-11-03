var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default;
var init_vite_config = __esm({
  async "vite.config.ts"() {
    "use strict";
    vite_config_default = defineConfig({
      plugins: [
        react(),
        runtimeErrorOverlay(),
        ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
          await import("@replit/vite-plugin-cartographer").then(
            (m) => m.cartographer()
          )
        ] : []
      ],
      resolve: {
        alias: {
          "@": path.resolve(import.meta.dirname, "client", "src"),
          "@shared": path.resolve(import.meta.dirname, "shared"),
          "@assets": path.resolve(import.meta.dirname, "attached_assets")
        }
      },
      root: path.resolve(import.meta.dirname, "client"),
      build: {
        outDir: path.resolve(import.meta.dirname, "dist/public"),
        emptyOutDir: true
      },
      server: {
        fs: {
          strict: true,
          deny: ["**/.*"]
        }
      }
    });
  }
});

// server/vite.ts
var vite_exports = {};
__export(vite_exports, {
  log: () => log,
  serveStatic: () => serveStatic,
  setupVite: () => setupVite
});
import express2 from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { nanoid } from "nanoid";
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app, server2) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server: server2 },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app.use(express2.static(distPath));
  app.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}
var viteLogger;
var init_vite = __esm({
  async "server/vite.ts"() {
    "use strict";
    await init_vite_config();
    viteLogger = createLogger();
  }
});

// server/index.ts
import "dotenv/config";
import { createServer } from "node:http";

// server/app.ts
import express from "express";

// shared/consultation.ts
import { z } from "zod";
var insertConsultationRequestSchema = z.object({
  fullName: z.string().trim().min(1, "L\xFCtfen ad\u0131n\u0131z\u0131 ve soyad\u0131n\u0131z\u0131 girin.").max(120, "Ad soyad en fazla 120 karakter olabilir."),
  email: z.string().trim().max(254).email("L\xFCtfen ge\xE7erli bir e-posta adresi girin."),
  phone: z.string().trim().min(1, "L\xFCtfen telefon numaran\u0131z\u0131 girin.").max(32).regex(/^\+?[\d\s().-]+$/, "L\xFCtfen ge\xE7erli bir telefon numaras\u0131 girin.").refine((value) => {
    const digits = value.replace(/\D/g, "").length;
    return digits >= 7 && digits <= 15;
  }, "L\xFCtfen ge\xE7erli bir telefon numaras\u0131 girin."),
  program: z.string().trim().min(1, "L\xFCtfen bir program se\xE7in.").max(100),
  message: z.string().trim().min(1, "L\xFCtfen mesaj\u0131n\u0131z\u0131 yaz\u0131n.").max(5e3, "Mesaj\u0131n\u0131z en fazla 5000 karakter olabilir."),
  language: z.enum(["tr", "en"]).optional()
});

// server/emailService.ts
import nodemailer from "nodemailer";
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
function getSmtpOptions() {
  const port = Number(process.env.SMTP_PORT || 587);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("Invalid SMTP_PORT");
  return {
    host: process.env.SMTP_HOST || "smtp.ionos.de",
    port,
    secure: process.env.SMTP_SECURE === void 0 ? port === 465 : process.env.SMTP_SECURE === "true",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    connectionTimeout: 5e3,
    greetingTimeout: 5e3,
    socketTimeout: 1e4
  };
}
function getSmtpDiagnostics(error) {
  const failure = error && typeof error === "object" ? error : {};
  const user = process.env.EMAIL_USER || "";
  const password = process.env.EMAIL_PASS || "";
  const authPayload = Buffer.from("\0" + user + "\0" + password).toString("base64");
  let response = typeof failure.response === "string" ? failure.response : "";
  for (const secret of [authPayload, password, user, Buffer.from(password).toString("base64"), Buffer.from(user).toString("base64")].filter(Boolean).sort((a, b) => b.length - a.length)) {
    response = response.split(secret).join("[REDACTED]");
  }
  response = response.replace(/[\r\n]+/g, " ").slice(0, 600);
  const command = typeof failure.command === "string" && /^(AUTH(?: (?:PLAIN|LOGIN|XOAUTH2))?|CONN|EHLO|HELO|STARTTLS|MAIL FROM|RCPT TO|DATA)$/.test(failure.command) ? failure.command : "OTHER";
  return {
    code: typeof failure.code === "string" && /^[A-Z_]{1,40}$/.test(failure.code) ? failure.code : "UNKNOWN",
    responseCode: typeof failure.responseCode === "number" ? failure.responseCode : null,
    command,
    response,
    host: process.env.SMTP_HOST || "smtp.ionos.de",
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === void 0 ? Number(process.env.SMTP_PORT || 587) === 465 : process.env.SMTP_SECURE === "true",
    userConfigured: !!user,
    passwordConfigured: !!password,
    userHasOuterWhitespace: user !== user.trim(),
    passwordHasOuterWhitespace: password !== password.trim(),
    passwordHasWrappingQuotes: password.length >= 2 && (password.startsWith('"') && password.endsWith('"') || password.startsWith("'") && password.endsWith("'")),
    passwordContainsNonAscii: /[^\x00-\x7F]/.test(password)
  };
}
function getTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw Object.assign(new Error("SMTP credentials are not configured"), { code: "SMTP_NOT_CONFIGURED" });
  }
  return nodemailer.createTransport(getSmtpOptions());
}
async function sendConsultationRequest(consultationData) {
  const emailContent = `
    <h2>Yeni Randevu Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(consultationData.fullName)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(consultationData.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(consultationData.email)}</p>
    <p><strong>Program:</strong> ${escapeHtml(consultationData.program)}</p>
    <p><strong>Mesaj:</strong></p>
    <p>${consultationData.message ? escapeHtml(consultationData.message) : "Mesaj bulunmamaktad\u0131r."}</p>
    
    <hr>
    <p><small>Bu email EnvoEdu Germany web sitesi \xFCzerinden g\xF6nderilmi\u015Ftir.</small></p>
  `;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || "info@envoedugermany.com",
    subject: `Yeni Randevu Talebi - ${consultationData.fullName.replace(/[\r\n]/g, " ")}`,
    html: emailContent,
    text: ["Yeni Randevu Talebi", consultationData.fullName, consultationData.email, consultationData.phone, consultationData.program, consultationData.message].join("\n"),
    replyTo: consultationData.email
  };
  try {
    const result = await getTransporter().sendMail(mailOptions);
    if (!result.accepted?.length) throw new Error("SMTP did not accept the recipient");
    console.log("Consultation request email sent successfully");
  } catch (error) {
    console.error("Consultation SMTP send failed");
    throw error;
  }
}
async function sendConfirmationEmail(consultationData) {
  const confirmationContent = `
    <h2>Randevu Talebiniz Al\u0131nd\u0131</h2>
    <p>Say\u0131n ${escapeHtml(consultationData.fullName)},</p>
    
    <p>Randevu talebiniz ba\u015Far\u0131yla al\u0131nm\u0131\u015Ft\u0131r. En k\u0131sa s\xFCrede size d\xF6n\xFC\u015F yapaca\u011F\u0131z.</p>
    
    <h3>Talep Detaylar\u0131n\u0131z:</h3>
    <p><strong>Program:</strong> ${escapeHtml(consultationData.program)}</p>
    
    <p>Herhangi bir sorunuz olursa bizimle ileti\u015Fime ge\xE7mekten \xE7ekinmeyin.</p>
    
    <p>Sayg\u0131lar\u0131m\u0131zla,<br>
    EnvoEdu Germany Ekibi</p>
    
    <hr>
    <p><small>Bu otomatik bir emaildir, l\xFCtfen yan\u0131tlamay\u0131n.</small></p>
  `;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: consultationData.email,
    subject: consultationData.language === "en" ? "Appointment Request Received - Envoedu Germany" : "Randevu Talebiniz Al\u0131nd\u0131 - Envoedu Germany",
    html: consultationData.language === "en" ? [
      "<h2>We have received your appointment request</h2>",
      "<p>Dear " + escapeHtml(consultationData.fullName) + ",</p>",
      "<p>Your request has been received. We will get back to you as soon as possible.</p>",
      "<p>Kind regards,<br>Envoedu Germany</p>"
    ].join("") : confirmationContent
  };
  try {
    const result = await getTransporter().sendMail(mailOptions);
    if (!result.accepted?.length) throw new Error("SMTP did not accept the recipient");
    console.log("Confirmation email sent successfully");
  } catch (error) {
    console.error("Confirmation SMTP send failed");
    throw error;
  }
}

// server/routes.ts
function registerRoutes(app) {
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "Server is running" });
  });
  app.post("/api/consultation-requests", async (req, res) => {
    const result = insertConsultationRequestSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ success: false, message: "Ge\xE7ersiz form verisi", errors: result.error.issues });
      return;
    }
    const data = result.data;
    try {
      await sendConsultationRequest(data);
    } catch (error) {
      console.error("Consultation email failed:", JSON.stringify(getSmtpDiagnostics(error)));
      res.status(503).json({ success: false, message: "Talebiniz g\xF6nderilemedi. L\xFCtfen tekrar deneyin veya WhatsApp \xFCzerinden bizimle ileti\u015Fime ge\xE7in." });
      return;
    }
    let confirmationSent = true;
    try {
      await sendConfirmationEmail(data);
    } catch {
      confirmationSent = false;
      console.warn("Consultation delivered; confirmation email could not be sent.");
    }
    res.json({ success: true, confirmationSent, message: "Randevu talebiniz ba\u015Far\u0131yla g\xF6nderildi. En k\u0131sa s\xFCrede size d\xF6n\xFC\u015F yapaca\u011F\u0131z." });
  });
  app.all("/api/consultation-requests", (_req, res) => {
    res.set("Allow", "POST").status(405).json({ success: false, message: "Method not allowed" });
  });
  app.use("/api", (_req, res) => {
    res.status(404).json({ success: false, message: "API endpoint not found" });
  });
}

// server/app.ts
function createApp() {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json({ limit: "32kb" }));
  app.use(express.urlencoded({ extended: false, limit: "32kb" }));
  registerRoutes(app);
  const handleError = (error, _req, res, _next) => {
    const status = error.status === 400 ? 400 : error.status === 413 ? 413 : 500;
    res.status(status).json({ success: false, message: status === 400 ? "Invalid JSON" : status === 413 ? "Request too large" : "Internal server error" });
  };
  app.use(handleError);
  return app;
}
var app_default = createApp();

// server/index.ts
var server = createServer(app_default);
async function start() {
  if (process.env.NODE_ENV === "development") {
    const { setupVite: setupVite2 } = await init_vite().then(() => vite_exports);
    await setupVite2(app_default, server);
  } else {
    const { default: express3 } = await import("express");
    const { default: path3 } = await import("node:path");
    const publicPath = path3.resolve(import.meta.dirname, "public");
    app_default.use(express3.static(publicPath));
    app_default.get("*", (_req, res) => res.sendFile(path3.join(publicPath, "index.html")));
  }
  const port = Number(process.env.PORT || 5e3);
  server.listen(port, "0.0.0.0", () => console.log(`Server listening on port ${port}`));
}
start().catch(() => {
  console.error("Server could not start");
  process.exitCode = 1;
});
