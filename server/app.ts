import express, { type ErrorRequestHandler } from "express";
import { registerRoutes } from "./routes.js";

export function createApp() {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json({ limit: "32kb" }));
  app.use(express.urlencoded({ extended: false, limit: "32kb" }));
  registerRoutes(app);
  const handleError: ErrorRequestHandler = (error, _req, res, _next) => {
    const status = error.status === 400 ? 400 : error.status === 413 ? 413 : 500;
    res.status(status).json({ success: false, message: status === 400 ? "Invalid JSON" : status === 413 ? "Request too large" : "Internal server error" });
  };
  app.use(handleError);
  return app;
}

export default createApp();
