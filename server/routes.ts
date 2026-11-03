import type { Express } from "express";
import { insertConsultationRequestSchema } from "../shared/consultation.js";
import { sendConsultationRequest, sendConfirmationEmail } from "./emailService.js";

export function registerRoutes(app: Express): void {
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "Server is running" });
  });
  app.post("/api/consultation-requests", async (req, res) => {
    const result = insertConsultationRequestSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ success: false, message: "Geçersiz form verisi", errors: result.error.issues });
      return;
    }
    const data = result.data;
    try {
      // Acknowledge only after the business mailbox has accepted the request.
      await sendConsultationRequest(data);
    } catch (error) {
      const code = error && typeof error === "object" && "code" in error ? error.code : "UNKNOWN";
      console.error("Consultation email failed:", code);
      res.status(503).json({ success: false, message: "Talebiniz gönderilemedi. Lütfen tekrar deneyin veya WhatsApp üzerinden bizimle iletişime geçin." });
      return;
    }
    // A failed customer copy must not turn a delivered request into a failure.
    let confirmationSent = true;
    try { await sendConfirmationEmail(data); }
    catch {
      confirmationSent = false;
      console.warn("Consultation delivered; confirmation email could not be sent.");
    }
    res.json({ success: true, confirmationSent, message: "Randevu talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız." });
  });
  app.all("/api/consultation-requests", (_req, res) => {
    res.set("Allow", "POST").status(405).json({ success: false, message: "Method not allowed" });
  });
  app.use("/api", (_req, res) => {
    res.status(404).json({ success: false, message: "API endpoint not found" });
  });
}
