import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Contact from "../client/src/components/sections/contact";
import { setLanguage } from "../client/src/lib/i18n";

afterEach(cleanup);
describe("Contact information", () => {
  it("keeps direct contact links and opening hours without form fields", () => {
    setLanguage("tr");
    const { container } = render(<Contact />);
    expect(container.querySelector("form, input, textarea, button[type='submit']")).toBeNull();
    expect(screen.getByTestId("contact-email")).toHaveAttribute("href", "mailto:info@envoedugermany.com");
    expect(screen.getByRole("link", { name: "+49 172 3959721" })).toHaveAttribute("href", expect.stringContaining("https://wa.me/491723959721"));
    expect(screen.getByText("Çalışma Saatleri")).toBeInTheDocument();
  });
  it("localizes direct contact information in English", () => {
    setLanguage("en");
    render(<Contact />);
    expect(screen.getByTestId("contact-info-title")).toHaveTextContent("Contact Information");
    expect(screen.getByTestId("contact-description")).toHaveTextContent("contact us via WhatsApp or email");
    expect(screen.queryByTestId("button-submit-consultation")).not.toBeInTheDocument();
  });
});
