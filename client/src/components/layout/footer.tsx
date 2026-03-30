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
              <span className="text-xl font-bold">Envoedu Germany</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Almanya'da eğitim hayalinizi gerçeğe dönüştüren güvenilir
              ortağınız.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-1"
                >
                  Üniversite Danışmanlığı
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-2"
                >
                  Başvuru Hazırlığı
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-3"
                >
                  Başvuru Süreçleri
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-4"
                >
                  Dil Eğitimi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bilgi</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-about"
                >
                  Hakkımızda
                </Link>
              </li>
              {/* Düzeltilen bağlantı */}
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-success-stories"
                >
                  Başarı Hikayeleri
                </Link>
              </li>

              <li>
                <a
                  href="/faq"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-faq"
                >
                  SSS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p data-testid="footer-email">info@envoedu.com.tr</p>
              <p data-testid="footer-location">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2014 Envoedu Germany. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-secondary-foreground/60 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-privacy"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-terms"
            >
              Kullanım Şartları
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-cookies"
            >
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
