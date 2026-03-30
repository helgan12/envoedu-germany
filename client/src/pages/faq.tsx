import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Almanya'da eğitim almak için hangi dil seviyesi gereklidir?",
    answer:
      "Almanya'da eğitim alabilmek için genellikle B2 veya C1 seviyesinde Almanca bilgisi gerekmektedir. Ancak bazı üniversiteler İngilizce programlar da sunmaktadır. İngilizce programlar için TOEFL veya IELTS sertifikası yeterlidir.",
  },
  {
    question: "Almanya'da üniversite eğitimi ücretli mi?",
    answer:
      "Almanya'daki devlet üniversitelerinde lisans ve yüksek lisans eğitimi çoğunlukla ücretsizdir. Sadece dönemlik katkı payı (yaklaşık 200-400 Euro) ödenir. Bu katkı payla ulaşım kartı ve diğer öğrenci hizmetleri sağlanır. Özel üniversiteler ve bazı MBA programları ücretlidir.",
  },
  {
    question: "Almanya'da eğitim sürecim ne kadar sürer?",
    answer:
      "Almanya'daki başvuru ve kabul süreçleri genellikle birkaç ay sürebilir. Süreç, başvurunun yapıldığı üniversiteye ve başvuru yoğunluğuna göre değişebilir. Bu nedenle başvurularınızı dönem başlangıcından en az 3-6 ay önce yapmanız önerilir.",
  },
  {
    question: "Almanya'da çalışma izni var mı?",
    answer:
      "Evet, Almanya'da eğitim alırken belirli şartlar altında yarı zamanlı çalışma imkanları vardır. Mezuniyet sonrası da iş arama ve çalışma izinleriyle ilgili çeşitli yasal haklarınız olabilir.",
  },
  {
    question: "Başvuru için hangi belgeler gereklidir?",
    answer:
      "Başvuru için genellikle şu belgeler gerekir: Diploma ve transkript, motivasyon mektubu, CV, dil yeterlilik belgesi (Almanca veya İngilizce) ve bazı programlar için referans mektupları. Bazı bölümler için GRE/GMAT gibi ek testler de istenebilir.",
  },
  {
    question: "Hangi üniversiteleri seçmeliyim?",
    answer:
      "Üniversite seçimi akademik hedeflerinize, bölümünüze ve bütçenize bağlıdır. TU München, Heidelberg, LMU München, Humboldt gibi üniversiteler dünya sıralamasında üst sıralardadır. Ancak her öğrenci için en iyi üniversite farklı olabilir. Danışmanlarımız size özel üniversite önerileri sunabilir.",
  },
  {
    question: "Almanya'da barınma nasıl sağlanır?",
    answer:
      "Almanya'da öğrenciler genellikle öğrenci yurtlarında (Studentenwohnheim), WG (paylaşımlı daire) veya özel dairelerde kalırlar. Öğrenci yurtları en ekonomik seçenektir (250-400 Euro/ay). WG'ler ise sosyal bir ortam sunar. Barınma için başvurunuzu erken yapmanız önemlidir.",
  },
  {
    question: "Ne zaman başvuru yapmalıyım?",
    answer:
      "Almanya'daki üniversitelere başvurular genellikle iki dönem için yapılır: Kış dönemi (Ekim başlangıç) için Mayıs-Temmuz arası, Yaz dönemi (Nisan başlangıç) için Kasım-Ocak arası. Ancak her program için başvuru tarihleri farklı olabilir. Erken başvuru yapmanız şansınızı artırır.",
  },
  {
    question: "Mezuniyet sonrası Almanya'da kalabilir miyim?",
    answer:
      "Evet! Almanya, mezuniyet sonrası iş arama ve çalışma izinleri konusunda öğrencilere avantajlı imkanlar sunar. Bu süre içinde işinize uygun bir pozisyon bulabilir ve uzun vadeli çalışma ile oturum hakları için başvurabilirsiniz.",
  },
  {
    question: "Danışmanlık sürecinin her aşaması ne kadar sürer?",
    answer:
      "İlk Görüşme: Ücretsiz danışmanlık görüşmemiz yaklaşık 1 saat sürer. Başvuru Hazırlığı: Tüm belgelerin hazırlanması ve başvuruların yapılması 2-4 hafta sürer. Üniversite Yanıtı: Üniversitelerden kabul cevabı almak 6-12 hafta arasında değişir. Toplam süreç, başvurudan kesin kabul alana kadar yaklaşık 3-6 ay arasında değişebilir.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />

      {/* Başlık Bölümü */}
      <div className="bg-primary/5 border-b border-border py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground text-center"
            data-testid="faq-title"
          >
            Sıkça Sorulan Sorular
          </h1>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xl text-muted-foreground"
              data-testid="faq-description"
            >
              Almanya'da eğitim hakkında merak ettikleriniz
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Başka sorularınız mı var?
            </h3>
            <p className="text-muted-foreground mb-6">
              Uzman danışmanlarımız size yardımcı olmak için hazır
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              data-testid="button-contact-from-faq"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
