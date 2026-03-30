import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="terms-title">
              Kullanım Şartları
            </h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Giriş</h2>
              <p className="text-muted-foreground leading-relaxed">
                İşbu Kullanım Şartları, www.envoedugermany.com web sitesine ("Site") erişim ve Sitenin kullanımına ilişkin kuralları belirler. Siteye erişim sağlayan her kullanıcı, bu şartları kayıtsız şartsız kabul etmiş sayılır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Fikri Mülkiyet Hakları</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sitede yer alan her türlü içerik, marka, logo, grafik ve yazılımın mülkiyet hakları Envoedu'ya aittir. 5846 sayılı Fikir ve Sanat Eserleri Kanunu kapsamında korunan bu içeriklerin, yazılı izin alınmaksızın kopyalanması, dağıtılması veya ticari amaçla kullanılması yasaktır. İhlal durumunda hukuki süreç başlatılacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Hizmetlerin İçeriği ve Sorumluluk</h2>
              <p className="text-muted-foreground leading-relaxed">
                Envoedu, Almanya'daki eğitim sistemi hakkında bilgilendirme sunar. Ancak; üniversite kabul şartları, ilgili mevzuat ve harç miktarları gibi bilgiler dış kurumlara bağlı olarak değişebilir. Envoedu, bu bilgilerin doğruluğu için azami çaba gösterse de, bilgilerin mutlak güncelliğini garanti etmez. Sitedeki bilgilere dayanarak işlem yapan kullanıcının uğrayabileceği doğrudan veya dolaylı zararlardan Envoedu sorumlu değildir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Kullanıcı Yükümlülükleri</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kullanıcı, Siteyi kullanırken Türk Ceza Kanunu ve ilgili mevzuata aykırı hareket etmeyeceğini, üçüncü şahısların haklarını ihlal etmeyeceğini ve Site güvenliğini tehlikeye atmayacağını kabul eder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Uyuşmazlıkların Çözümü</h2>
              <p className="text-muted-foreground leading-relaxed">
                İşbu sözleşmeden doğacak uyuşmazlıklarda Türk Hukuku uygulanacak olup, İstanbul (Merkez) Mahkemeleri ve İcra Daireleri yetkilidir.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
