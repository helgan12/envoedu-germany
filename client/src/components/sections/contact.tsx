import { translateText } from "@/lib/i18n";
import { MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-foreground mb-4"
            data-testid="contact-title"
          >{translateText(" İletişime Geçin ")}</h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="contact-description"
          >{translateText(" Danışmanlık ve sorularınız için WhatsApp veya e-posta üzerinden bizimle iletişime geçin. ")}</p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-semibold text-foreground mb-6"
                data-testid="contact-info-title"
              >{translateText(" İletişim Bilgileri ")}</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{translateText("Adres")}</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="contact-address"
                    >{translateText(" Levent Mahallesi, Büyükdere Caddesi ")}<br />{translateText(" No: 185, Kanyon Ofis Binası ")}<br />{translateText(" 34394 Şişli, İstanbul ")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-6 w-6 text-accent fill-current"
                    >
                      <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.6c2.3 1.3 5 2.1 7.7 2.1 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.2c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.5 1.6-4.8-.3-.5c-1.2-2-1.8-4.3-1.8-6.7C3.4 8.4 9.4 2.4 16 2.4S28.6 8.4 28.6 16 22.6 28.7 16 28.7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{translateText("WhatsApp")}</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="text-whatsapp"
                    >
                      <a
                        href={"https://wa.me/491723959721?text=" + encodeURIComponent(translateText("Merhaba bilgi almak istiyorum"))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +49 172 3959721
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{translateText("E-posta")}</h4>
                    <a
                      href="mailto:info@envoedugermany.com"
                      className="text-muted-foreground hover:text-secondary hover:underline transition-all"
                      data-testid="contact-email"
                    >{translateText(" info@envoedugermany.com ")}</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">{translateText(" Çalışma Saatleri ")}</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>{translateText("Pazartesi - Cuma:")}</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{translateText("Cumartesi:")}</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{translateText("Pazar:")}</span>
                  <span>{translateText("Kapalı")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
