import LanguageSwitcher from "@/components/language-switcher";
import { useLanguage, translateText, translateNode } from "@/lib/i18n";
import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/ChatGPT Image 23. Nov. 2025, 00_27_42_1763854074668.png";

export default function Navbar() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="bg-secondary border-b border-border fixed top-0 w-full z-50"
      style={{ color: "#ddd" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 NAVBAR YÜKSEKLİĞİ BURADA AYARLANIYOR */}
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24 gap-3 overflow-hidden">
          {/* Logo + text */}
          <Link
            href="/"
            className="flex items-center w-28 sm:w-40 shrink-0"
            onClick={handleScrollToTop}
            data-testid="nav-logo"
          >
            {/* 🔹 LOGO BOYUTU BURADA AYARLANIYOR */}
            {language === "en" ? (
              <span className="flex flex-col leading-tight text-white py-2">
                <span className="text-xl font-semibold tracking-tight">Envoedu</span>
                <span className="text-[10px] tracking-[0.3em] uppercase">Germany</span>
                <span className="text-[9px] mt-1 whitespace-nowrap">Study Abroad Consultancy</span>
              </span>
            ) : <img
              src={logoImage}
              alt={translateText("Envoedu Germany – Yurtdışı Eğitim Danışmanlığı")}
              className="w-full h-auto object-contain"
            />}
          </Link>

          {/* Desktop menu */}
          <div className="hidden xl:flex items-center space-x-4 text-sm">
            <Link
              href="/"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              onClick={handleScrollToTop}
              data-testid="nav-home"
            >{translateText(" Ana Sayfa ")}</Link>
            <Link
              href="/services"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-services"
            >{translateText(" Hizmetler ")}</Link>
            <Link
              href="/universities"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-universities"
            >{translateText(" Üniversiteler ")}</Link>
            <a
              href="https://envoedu.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-vocational-de"
            >{translateText(" Mesleki Eğitim ")}</a>
            <Link
              href="/process"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-process"
            >{translateText(" Süreç ")}</Link>
            <Link
              href="/about"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-about"
            >{translateText(" Hakkımızda ")}</Link>
            <Link
              href="/faq"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-faq"
            >{translateText(" Sıkça Sorulan Sorular ")}</Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-contact"
            >{translateText(" İletişim ")}</Link>
          </div>

          <LanguageSwitcher />
          {/* Mobile menu button */}
          <button
            className="xl:hidden shrink-0"
            aria-label={translateText(isMenuOpen ? "Menüyü kapat" : "Menüyü aç")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="nav-menu-button"
          >
            {translateNode(isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {translateNode(isMenuOpen && (
          <div
            className="xl:hidden py-4 border-t border-border"
            data-testid="nav-mobile-menu"
            id="mobile-navigation"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                onClick={handleScrollToTop}
                data-testid="mobile-nav-home"
              >{translateText(" Ana Sayfa ")}</Link>
              <Link
                href="/services"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-services"
              >{translateText(" Hizmetler ")}</Link>
              <Link
                href="/universities"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-universities"
              >{translateText(" Üniversiteler ")}</Link>
              <a
                href="https://envoedu.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-vocational-de"
              >{translateText(" Mesleki Eğitim ")}</a>
              <Link
                href="/process"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-process"
              >{translateText(" Süreç ")}</Link>
              <Link
                href="/about"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-about"
              >{translateText(" Hakkımızda ")}</Link>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-contact"
              >{translateText(" İletişim ")}</Link>
              <Link
                href="/faq"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-faq"
              >{translateText(" SSS ")}</Link>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
