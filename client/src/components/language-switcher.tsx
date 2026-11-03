import { useLanguage } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <label className="flex shrink-0 items-center gap-2 text-sm" aria-label={language === "en" ? "Language" : "Dil"}>
      <span aria-hidden="true">🌐</span>
      <select
        value={language}
        onChange={event => setLanguage(event.target.value as "tr" | "en")}
        aria-label={language === "en" ? "Select language" : "Dil seçin"}
        data-testid="language-switcher"
        className="rounded-md border border-white/30 bg-secondary px-2 py-2 text-secondary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <option value="tr">Türkçe / Turkish</option>
        <option value="en">İngilizce / English</option>
      </select>
    </label>
  );
}
