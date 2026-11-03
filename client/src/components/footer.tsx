import { translateText, translateNode } from "@/lib/i18n";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Alan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Açıklama */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">{translateText("Envoedu Germany")}</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4">{translateText(" Almanya'da eğitim hayalinizi gerçeğe dönüştüren güvenilir danışmanlık hizmeti. ")}</p>

            {/* Sosyal Medya */}
            <div className="flex space-x-4 text-secondary-foreground/60">
              <span className="hover:text-accent transition-colors cursor-pointer">
                <i className="fab fa-facebook-f" />
              </span>
              <span className="hover:text-accent transition-colors cursor-pointer">
                <i className="fab fa-instagram" />
              </span>
              <span className="hover:text-accent transition-colors cursor-pointer">
                <i className="fab fa-linkedin-in" />
              </span>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translateText("Hizmetler")}</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>{translateText("Üniversite Danışmanlığı")}</li>
              <li>{translateText("Başvuru ve Kabul Süreci")}</li>
              <li>{translateText("Yerleşim Danışmanlığı")}</li>
            </ul>
          </div>

          {/* Bilgi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translateText("Bilgi")}</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a
                  href="/about"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-about"
                >{translateText(" Hakkımızda ")}</a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-faq"
                >{translateText(" Sıkça Sorulan Sorular ")}</a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translateText("İletişim")}</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              {/* WhatsApp */}
              <a
                href={"https://wa.me/491723959721?text=" + encodeURIComponent(translateText("Merhaba bilgi almak istiyorum"))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translateText("WhatsApp üzerinden iletişime geç")}
                className="block hover:text-accent transition-colors"
              >{translateText(" WhatsApp: +49 1723959721 ")}</a>

              {/* E-posta */}
              <a
                href="mailto:info@envoedugermany.com"
                className="block hover:text-accent transition-colors"
              >{translateText(" info@envoedugermany.com ")}</a>

              <span>{translateText("Germany")}</span>
            </div>
          </div>
        </div>

        {/* Alt Alan */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">{translateText(" © 2020 Envoedu Germany. Tüm hakları saklıdır. ")}</p>

          <div className="flex space-x-6 text-sm text-secondary-foreground/60">
            <a
              href="/privacy"
              className="hover:text-accent transition-colors cursor-pointer"
              data-testid="footer-privacy"
            >{translateText(" Gizlilik Politikası ")}</a>
            <a
              href="/terms"
              className="hover:text-accent transition-colors cursor-pointer"
              data-testid="footer-terms"
            >{translateText(" Kullanım Şartları ")}</a>
            <a
              href="/cookies"
              className="hover:text-accent transition-colors cursor-pointer"
              data-testid="footer-cookies"
            >{translateText(" Çerez Politikası ")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
