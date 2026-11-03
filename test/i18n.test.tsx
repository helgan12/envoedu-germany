import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "../client/src/App";
import { getLanguage, setLanguage, translateText, LANGUAGE_STORAGE_KEY } from "../client/src/lib/i18n";
import translations from "../client/src/lib/translations.en.json";
import { universities } from "../client/src/pages/universities";

beforeEach(() => {
  window.scrollTo = vi.fn();
  window.history.replaceState({}, "", "/");
  setLanguage("tr");
});
afterEach(cleanup);

const navigate = (path: string) => act(() => {
  window.history.pushState({}, "", path);
});

describe("Site language", () => {
  it("switches the current page, persists the choice and restores Turkish", () => {
    render(<App />);
    expect(screen.getByTestId("nav-contact")).toHaveTextContent("İletişim");
    fireEvent.change(screen.getByTestId("language-switcher"), { target: { value: "en" } });
    expect(document.documentElement.lang).toBe("en");
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");
    expect(screen.getByTestId("nav-contact")).toHaveTextContent("Contact");
    navigate("/services");
    expect(screen.getByTestId("services-page-title")).toHaveTextContent("Our Services");
    cleanup();
    render(<App />);
    expect(screen.getByTestId("language-switcher")).toHaveValue("en");
    fireEvent.change(screen.getByTestId("language-switcher"), { target: { value: "tr" } });
    expect(screen.getByTestId("services-page-title")).toHaveTextContent("Hizmetlerimiz");
  });

  it("renders all routes and university details without untranslated site copy", () => {
    setLanguage("en");
    render(<App />);
    const routes = ["/", "/services", "/universities", "/process", "/about", "/contact", "/faq", "/privacy", "/terms", "/cookies", "/missing", "/universities/999999", ...universities.map(u => `/universities/${u.id}`)];
    const translatable = new Set(Object.entries(translations).filter(([tr, en]) => tr !== en && /[çğıİşÇĞŞ]/.test(tr)).map(([tr]) => tr));
    const missing: string[] = [];
    for (const route of routes) {
      navigate(route);
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const text = walker.currentNode.textContent?.replace(/\s+/g, " ").trim() || "";
        if (translatable.has(text)) missing.push(`${route}: ${text}`);
      }
      expect(document.documentElement.lang).toBe("en");
      expect(document.title).not.toMatch(/Üniversite|İletişim|Hizmetler/);
    }
    expect(missing).toEqual([]);
  }, 60000);

  it("searches English university descriptions and keeps filters working", () => {
    setLanguage("en");
    window.history.replaceState({}, "", "/universities");
    render(<App />);
    fireEvent.change(screen.getByTestId("search-input"), { target: { value: "technical" } });
    expect(screen.getByTestId("results-count").textContent).not.toMatch(/^0 /);
    fireEvent.change(screen.getByTestId("search-input"), { target: { value: "" } });
    fireEvent.change(screen.getByTestId("category-filter"), { target: { value: "Fachhochschule" } });
    expect(screen.getByTestId("results-count")).toHaveTextContent("found");
    expect(screen.queryByTestId("no-results")).not.toBeInTheDocument();
  });

  it("translates validation toasts and retains entered form data when switching", () => {
    window.history.replaceState({}, "", "/contact");
    render(<App />);
    fireEvent.change(screen.getByTestId("input-full-name"), { target: { value: "Alex" } });
    fireEvent.change(screen.getByTestId("language-switcher"), { target: { value: "en" } });
    expect(screen.getByTestId("input-full-name")).toHaveValue("Alex");
    expect(screen.getByTestId("input-full-name")).toHaveAttribute("placeholder", "Enter your name");
    fireEvent.click(screen.getByTestId("button-submit-consultation"));
    expect(screen.getAllByText("Please fill in all fields.").length).toBeGreaterThan(0);
    expect(screen.getByTestId("button-submit-consultation")).toHaveTextContent("Request an Appointment");
  });

  it("localizes joined language names and remains usable when storage is blocked", () => {
    setLanguage("en");
    expect(translateText("Almanca, İngilizce")).toBe("German, English");
    const storage = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
    expect(() => setLanguage("tr")).not.toThrow();
    expect(getLanguage()).toBe("tr");
    storage.mockRestore();
  });
});
