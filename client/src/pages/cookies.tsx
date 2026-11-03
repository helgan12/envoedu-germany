import { translateText, translateNode } from "@/lib/i18n";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="cookies-title">{translateText(" Çerez Politikası ")}</h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{translateText("1. Çerezlerin Kullanımı Hakkında")}</h2>
              <p className="text-muted-foreground leading-relaxed">{translateText(" Envoedu olarak, ziyaretçilerimizin kullanıcı deneyimini iyileştirmek ve Site performansını analiz etmek amacıyla çerezlerden faydalanmaktayız. Çerezler, tarayıcınız üzerinden cihazınıza bırakılan küçük metin dosyalarıdır. ")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{translateText("2. Kullanılan Çerez Türleri")}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{translateText("Zorunlu Çerezler")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{translateText(" Sitenin çalışması için teknik olarak zorunlu olan, güvenlik ve form iletimi gibi temel fonksiyonları sağlayan çerezlerdir. ")}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{translateText("İstatistik ve Analiz Çerezleri")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{translateText(" Sitemizi kaç kişinin ziyaret ettiğini, hangi sayfaların daha çok tıklandığını anonim olarak ölçümlememize yarayan çerezlerdir (Örn: Google Analytics). ")}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{translateText("Pazarlama Çerezleri")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{translateText(" İlgi alanlarınıza göre size özel içerik ve reklam sunabilmek adına kullanılan üçüncü taraf çerezleridir. ")}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{translateText("3. Çerezleri Nasıl Kontrol Edebilirsiniz?")}</h2>
              <p className="text-muted-foreground leading-relaxed">{translateText(" Çerez kullanımı birçok tarayıcıda varsayılan olarak kabul edilir. Ancak kullanıcılar, tarayıcı ayarları (Chrome, Safari, Firefox vb.) üzerinden çerezleri dilediği zaman silebilir veya engelleyebilir. Çerezlerin engellenmesi, Sitenin bazı bölümlerinin (başvuru formları vb.) işlevselliğini yitirmesine neden olabilir. ")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">{translateText("4. Aydınlatma Yükümlülüğü")}</h2>
              <p className="text-muted-foreground leading-relaxed">{translateText(" Çerezler aracılığıyla elde edilen verileriniz, Gizlilik Politikamızda belirtilen esaslar çerçevesinde işlenmektedir. Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş sayılırsınız. ")}</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
