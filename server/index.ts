import "dotenv/config";
import { createServer } from "node:http";
import app from "./app";

const server = createServer(app);
async function start() {
if (process.env.NODE_ENV === "development") {
  const { setupVite } = await import("./vite");
  await setupVite(app, server);
} else {
  const { default: express } = await import("express");
  const { default: path } = await import("node:path");
  const publicPath = path.resolve(import.meta.dirname, "public");
  app.use(express.static(publicPath));
  app.get("*", (_req, res) => res.sendFile(path.join(publicPath, "index.html")));
}
const port = Number(process.env.PORT || 5000);
server.listen(port, "0.0.0.0", () => console.log(`Server listening on port ${port}`));
}
start().catch(() => {
  console.error("Server could not start");
  process.exitCode = 1;
});
