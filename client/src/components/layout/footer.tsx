import { translateText, translateNode } from "@/lib/i18n";
import { Link } from "wouter";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">{translateText("Envoedu Germany")}</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4">{translateText(" Almanya'da eğitim hayalinizi gerçeğe dönüştüren güvenilir ortağınız. ")}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{translateText("Hizmetler")}</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-1"
                >{translateText(" Üniversite Danışmanlığı ")}</Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-2"
                >{translateText(" Başvuru Hazırlığı ")}</Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-3"
                >{translateText(" Başvuru Süreçleri ")}</Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-4"
                >{translateText(" Dil Eğitimi ")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{translateText("Bilgi")}</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-about"
                >{translateText(" Hakkımızda ")}</Link>
              </li>
              {/* Düzeltilen bağlantı */}
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-success-stories"
                >{translateText(" Başarı Hikayeleri ")}</Link>
              </li>

              <li>
                <a
                  href="/faq"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-faq"
                >{translateText(" SSS ")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{translateText("İletişim")}</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p data-testid="footer-email">{translateText("info@envoedu.com.tr")}</p>
              <p data-testid="footer-location">{translateText("İstanbul, Türkiye")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">{translateText(" © 2014 Envoedu Germany. Tüm hakları saklıdır. ")}</p>
          <div className="flex space-x-6 text-sm text-secondary-foreground/60 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-privacy"
            >{translateText(" Gizlilik Politikası ")}</a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-terms"
            >{translateText(" Kullanım Şartları ")}</a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-cookies"
            >{translateText(" Çerez Politikası ")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
