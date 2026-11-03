import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "../client/src/components/sections/contact";
import { setLanguage } from "../client/src/lib/i18n";

const { toast } = vi.hoisted(() => ({ toast: vi.fn() }));
vi.mock("../client/src/hooks/use-toast", () => ({ useToast: () => ({ toast }) }));
const fetchMock = vi.fn();
beforeEach(() => {
  toast.mockReset();
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
  setLanguage("en");
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });
function renderForm() {
  render(<QueryClientProvider client={new QueryClient({ defaultOptions: { mutations: { retry: false } } })}><Contact /></QueryClientProvider>);
}
function fillForm(email = "alex@example.com") {
  fireEvent.change(screen.getByTestId("input-full-name"), { target: { value: " Alex " } });
  fireEvent.change(screen.getByTestId("input-phone"), { target: { value: "+49123456789" } });
  fireEvent.change(screen.getByTestId("input-email"), { target: { value: email } });
  fireEvent.change(document.querySelector("select[aria-hidden]")!, { target: { value: "muhendislik" } });
  fireEvent.change(screen.getByTestId("textarea-message"), { target: { value: "Please tell me more" } });
}

describe("Contact form submission", () => {
  it("rejects invalid email before making an API request", () => {
    renderForm(); fillForm("invalid-email");
    fireEvent.click(screen.getByTestId("button-submit-consultation"));
    expect(fetchMock).not.toHaveBeenCalled();
    expect(toast).toHaveBeenCalledWith(expect.objectContaining({ description: "Lütfen geçerli bir e-posta adresi girin." }));
  });
  it("submits normalized values once and clears the form after API success", async () => {
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } }));
    renderForm(); fillForm();
    fireEvent.click(screen.getByTestId("button-submit-consultation"));
    await waitFor(() => expect(screen.getByTestId("input-full-name")).toHaveValue(""));
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body).toMatchObject({ fullName: "Alex", phone: "+49123456789", language: "en" });
    expect(toast).toHaveBeenCalledWith(expect.objectContaining({ title: "Başarılı!" }));
  });
  it("preserves input and shows a useful error when hosting returns HTML", async () => {
    fetchMock.mockResolvedValueOnce(new Response("<!doctype html><html></html>", { headers: { "Content-Type": "text/html" } }));
    renderForm(); fillForm();
    fireEvent.click(screen.getByTestId("button-submit-consultation"));
    await waitFor(() => expect(toast).toHaveBeenCalledWith(expect.objectContaining({ description: expect.stringContaining("WhatsApp"), variant: "destructive" })));
    expect(screen.getByTestId("input-full-name")).toHaveValue(" Alex ");
  });
  it("does not report success when the API returns success:false", async () => {
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify({ success: false, message: "Mail service unavailable" }), { headers: { "Content-Type": "application/json" } }));
    renderForm(); fillForm();
    fireEvent.click(screen.getByTestId("button-submit-consultation"));
    await waitFor(() => expect(toast).toHaveBeenCalledWith(expect.objectContaining({ description: "Mail service unavailable", variant: "destructive" })));
    expect(screen.getByTestId("input-full-name")).toHaveValue(" Alex ");
  });
});
