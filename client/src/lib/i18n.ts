import { useSyncExternalStore } from "react";
import english from "./translations.en.json";

export type Language = "tr" | "en";
export const LANGUAGE_STORAGE_KEY = "envoedu-language";
const translations: Record<string, string> = english;
const listeners = new Set<() => void>();

function readLanguage(): Language {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "tr";
  } catch {
    return "tr";
  }
}

let language: Language = readLanguage();
export const getLanguage = () => language;
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
};

export function setLanguage(next: Language) {
  if (next !== "tr" && next !== "en") return;
  language = next;
  try { localStorage.setItem(LANGUAGE_STORAGE_KEY, next); } catch { /* Private browsing can disable storage. */ }
  document.documentElement.lang = next;
  listeners.forEach(listener => listener());
}

export function useLanguage() {
  const language = useSyncExternalStore(subscribe, getLanguage, () => "tr" as Language);
  return { language, setLanguage };
}

if (typeof window !== "undefined") {
  document.documentElement.lang = language;
  window.addEventListener("storage", event => {
    if (event.key === LANGUAGE_STORAGE_KEY || event.key === null) {
      language = readLanguage();
      document.documentElement.lang = language;
      listeners.forEach(listener => listener());
    }
  });
}

/** Translate display text only; route paths, filter values and form values stay stable. */
export function translateText(text: string): string {
  if (language === "tr" || !text) return text;
  const key = text.replace(/\s+/g, " ").trim();
  const translated = translations[key];
  if (translated !== undefined) {
    return (text.match(/^\s*/)?.[0] || "") + translated + (text.match(/\s*$/)?.[0] || "");
  }
  // Lists of instruction languages and interpolated captions have dynamic values.
  if (key.includes(", ")) {
    return text.split(", ").map(part => translateText(part)).join(", ");
  }
  if (key.endsWith(" lokasyonu")) return text.replace(/ lokasyonu\s*$/, " location");
  return text;
}

/** Preserve React elements and numbers while translating text rendered from data. */
export function translateNode<T>(node: T): T {
  if (typeof node === "string") return translateText(node) as T;
  if (Array.isArray(node)) return node.map(value => translateNode(value)) as T;
  return node;
}

const pageNames: Record<string, [string, string]> = {
  "/": ["Almanya Üniversite Danışmanlığı", "German University Admissions"],
  "/services": ["Hizmetlerimiz", "Our Services"],
  "/universities": ["Üniversiteler", "Universities"],
  "/process": ["Başvuru Süreci", "Application Process"],
  "/about": ["Hakkımızda", "About Us"],
  "/contact": ["İletişim", "Contact"],
  "/faq": ["Sıkça Sorulan Sorular", "Frequently Asked Questions"],
  "/privacy": ["Gizlilik Politikası", "Privacy Policy"],
  "/terms": ["Kullanım Şartları", "Terms of Use"],
  "/cookies": ["Çerez Politikası", "Cookie Policy"],
};

export function updateDocumentLanguage(language: Language, location: string) {
  document.documentElement.lang = language;
  const page = pageNames[location] || (location.startsWith("/universities/")
    ? ["Üniversite Detayları", "University Details"]
    : ["Sayfa Bulunamadı", "Page Not Found"]);
  const title = `${page[language === "en" ? 1 : 0]} | Envoedu Germany`;
  const description = language === "en"
    ? "University application and education consulting for Germany. Discover study opportunities in Germany with a free consultation."
    : "Almanya üniversite başvuru ve eğitim danışmanlığı. Ücretsiz danışmanlık ile Almanya’da eğitim fırsatlarını keşfedin.";
  document.title = title;
  document.querySelectorAll('meta[name="description"], meta[property="og:description"]').forEach(meta => meta.setAttribute("content", description));
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
}
