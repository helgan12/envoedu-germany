import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="privacy-title">
              Gizlilik Politikası
            </h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Veri Sorumlusu</h2>
              <p className="text-muted-foreground leading-relaxed">
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Envoedu (bundan sonra "Şirket" olarak anılacaktır) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Kişisel Verilerin İşlenme Amacı</h2>
              <p className="text-muted-foreground leading-relaxed">
                Toplanan kişisel verileriniz, Envoedu tarafından sunulan Almanya eğitim danışmanlığı ve kariyer planlama hizmetlerinden faydalanabilmeniz için gerekli çalışmaların iş birimlerimiz tarafından yapılması; hizmetlerimizin beğeni ve ihtiyaçlarınıza göre özelleştirilmesi; hukuki ve ticari güvenliğin temini ile ticari stratejilerimizin belirlenmesi amaçlarıyla KVKK'nın 5. ve 6. maddelerinde belirtilen şartlar dahilinde işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. İşlenen Kişisel Veriler</h2>
              <p className="text-muted-foreground leading-relaxed">
                Envoedu web sitesi üzerinden; ad-soyad, telefon, e-posta, mezuniyet notu, dil seviyesi ve IP adresi gibi verileriniz, açık rızanız veya kanunlarda öngörülen hallerde (sözleşmenin kurulması, veri sorumlusunun meşru menfaati vb.) işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, Almanya'daki anlaşmalı üniversiteler, dil okulları, konaklama sağlayıcıları ve yasal yükümlülükler gereği yetkili kamu kurum ve kuruluşları ile paylaşılabilecektir. Veri aktarımı sırasında KVKK'nın 8. ve 9. maddelerine uygun hareket edilmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kişisel verileriniz; web sitemizdeki iletişim formları, çerezler (cookies) ve e-posta yazışmaları aracılığıyla elektronik ortamda toplanmaktadır. Bu süreçte verileriniz, "ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması" hukuki sebebine dayanarak işlenir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Veri Sahibinin Hakları</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KVKK'nın 11. maddesi uyarınca her kullanıcı; verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve verilerin silinmesini (anonim hale getirilmesini) talep etme hakkına sahiptir. Taleplerinizi info@envoedugermany.com adresine yazılı olarak iletebilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
