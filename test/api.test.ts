// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createServer, type Server } from "node:http";
import { createApp } from "../server/app";
import { sendConsultationRequest, sendConfirmationEmail } from "../server/emailService";

vi.mock("../server/emailService", () => ({
  sendConsultationRequest: vi.fn(),
  sendConfirmationEmail: vi.fn(),
}));

const valid = { fullName: "Test User", email: "test@example.com", phone: "+905551234567", program: "Computer Science", message: "Test message", language: "en" };
let server: Server;
let base: string;
beforeEach(async () => {
  vi.mocked(sendConsultationRequest).mockReset().mockResolvedValue(undefined);
  vi.mocked(sendConfirmationEmail).mockReset().mockResolvedValue(undefined);
  server = createServer(createApp());
  await new Promise<void>(resolve => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  base = "http://127.0.0.1:" + (typeof address === "object" && address ? address.port : 0);
});
afterEach(async () => {
  await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
});
const post = (data: unknown) => fetch(base + "/api/consultation-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

describe("Contact API", () => {
  it("serves an actual JSON health response without an external server", async () => {
    const response = await fetch(base + "/api/health");
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/json");
    expect(await response.json()).toMatchObject({ status: "ok" });
  });
  it("delivers a validated request with phone number, then sends confirmation", async () => {
    const response = await post({ ...valid, fullName: "  Test User  " });
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ success: true, confirmationSent: true });
    expect(sendConsultationRequest).toHaveBeenCalledWith(valid);
    expect(sendConfirmationEmail).toHaveBeenCalledWith(valid);
  });
  it.each([
    { ...valid, email: "invalid-email" },
    { ...valid, fullName: "   " },
    { ...valid, phone: "   " },
    { ...valid, phone: "abc123" },
    { ...valid, message: "   " },
    { ...valid, program: "   " },
    { fullName: "Test User" },
  ])("rejects invalid input without sending email: %j", async input => {
    const response = await post(input);
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({ success: false });
    expect(sendConsultationRequest).not.toHaveBeenCalled();
    expect(sendConfirmationEmail).not.toHaveBeenCalled();
  });
  it("returns a failure when the business email cannot be delivered", async () => {
    vi.mocked(sendConsultationRequest).mockRejectedValueOnce(Object.assign(new Error("SMTP failed"), { code: "EAUTH" }));
    const response = await post(valid);
    expect(response.status).toBe(503);
    expect(await response.json()).toMatchObject({ success: false });
    expect(sendConfirmationEmail).not.toHaveBeenCalled();
  });
  it("keeps a delivered request successful when the customer copy fails", async () => {
    vi.mocked(sendConfirmationEmail).mockRejectedValueOnce(new Error("Mailbox unavailable"));
    const response = await post(valid);
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ success: true, confirmationSent: false });
    expect(sendConsultationRequest).toHaveBeenCalledTimes(1);
  });
  it("returns JSON for wrong methods and unknown API endpoints", async () => {
    const response = await fetch(base + "/api/consultation-requests");
    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("POST");
    const missing = await fetch(base + "/api/missing");
    expect(missing.status).toBe(404);
    expect(missing.headers.get("content-type")).toContain("application/json");
  });
  it("rejects malformed JSON before sending email", async () => {
    const response = await fetch(base + "/api/consultation-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{" });
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({ success: false });
    expect(sendConsultationRequest).not.toHaveBeenCalled();
  });
});
