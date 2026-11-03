// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import nodemailer from "nodemailer";
import { getSmtpOptions, getSmtpDiagnostics, sendConsultationRequest, sendConfirmationEmail } from "../server/emailService";

vi.mock("nodemailer", () => ({ default: { createTransport: vi.fn() } }));
const sendMail = vi.fn();
const data = { fullName: "Alex <Test>", email: "alex@example.com", phone: "+49 123 456789", program: "Engineering", message: "Hello <script>bad</script>", language: "en" as const };
beforeEach(() => {
  vi.stubEnv("EMAIL_USER", "info@example.com");
  vi.stubEnv("EMAIL_PASS", "test-password");
  vi.stubEnv("SMTP_HOST", "smtp.example.com");
  vi.stubEnv("SMTP_PORT", "465");
  vi.stubEnv("SMTP_SECURE", "true");
  vi.stubEnv("CONTACT_EMAIL", "inbox@example.com");
  sendMail.mockReset().mockResolvedValue({ accepted: ["inbox@example.com"] });
  vi.mocked(nodemailer.createTransport).mockReturnValue({ sendMail } as any);
});
afterEach(() => vi.unstubAllEnvs());

describe("SMTP delivery", () => {
  it("records SMTP rejection details without exposing credentials or encoded AUTH data", () => {
    const payload = Buffer.from("\0info@example.com\0test-password").toString("base64");
    const diagnostic = getSmtpDiagnostics({ code: "EAUTH", command: "AUTH PLAIN", responseCode: 535, response: "535 Authentication rejected info@example.com test-password " + payload });
    expect(diagnostic).toMatchObject({ code: "EAUTH", command: "AUTH PLAIN", responseCode: 535 });
    const logged = JSON.stringify(diagnostic);
    expect(logged).not.toContain("test-password");
    expect(logged).not.toContain("info@example.com");
    expect(logged).not.toContain(payload);
  });
  it("detects accidental quotes and whitespace without revealing the password", () => {
    vi.stubEnv("EMAIL_PASS", '"example-secret"');
    expect(getSmtpDiagnostics({})).toMatchObject({ passwordHasWrappingQuotes: true });
    vi.stubEnv("EMAIL_PASS", "example-secret\n");
    expect(getSmtpDiagnostics({})).toMatchObject({ passwordHasOuterWhitespace: true });
  });
  it("honors configured host, port and TLS settings", () => {
    expect(getSmtpOptions()).toMatchObject({ host: "smtp.example.com", port: 465, secure: true });
    expect(getSmtpOptions()).not.toHaveProperty("tls.rejectUnauthorized", false);
  });
  it("includes the phone number, safe HTML and a reply address", async () => {
    await sendConsultationRequest(data);
    expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({ to: "inbox@example.com", replyTo: "alex@example.com", text: expect.stringContaining(data.phone), html: expect.stringContaining("&lt;script&gt;") }));
    expect(sendMail.mock.calls[0][0].html).not.toContain("<script>");
  });
  it("localizes the customer confirmation", async () => {
    await sendConfirmationEmail(data);
    expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({ to: "alex@example.com", subject: "Appointment Request Received - Envoedu Germany", html: expect.stringContaining("Dear Alex &lt;Test&gt;") }));
  });
  it("does not claim delivery for rejected recipients", async () => {
    sendMail.mockResolvedValueOnce({ accepted: [], rejected: ["inbox@example.com"] });
    await expect(sendConsultationRequest(data)).rejects.toThrow("SMTP did not accept the recipient");
  });
  it("propagates authentication failures to the API", async () => {
    sendMail.mockRejectedValueOnce(Object.assign(new Error("Authentication failed"), { code: "EAUTH" }));
    await expect(sendConsultationRequest(data)).rejects.toMatchObject({ code: "EAUTH" });
  });
});
