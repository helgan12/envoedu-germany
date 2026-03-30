import {
  CheckCircle,
  FileText,
  Users,
  Plane,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

const processSteps = [
  {
    step: 1,
    title: "İlk Görüşme",
    duration: "1 saat",
    icon: MessageCircle,
    description: "Ücretsiz danışmanlık görüşmesi ile hedeflerinizi belirleriz",
    details: [
      "Kişisel hedeflerinizi anlıyoruz",
      "Akademik geçmişinizi değerlendiriyoruz",
      "Bütçe ve zaman planlaması yapıyoruz",
      "Size özel yol haritası oluşturuyoruz",
    ],
    color: "primary",
  },
  {
    step: 2,
    title: "Profil Analizi",
    duration: "1-2 hafta",
    icon: Users,
    description:
      "Akademik geçmişinizi analiz ederek size uygun programları seçeriz",
    details: [
      "Uygun üniversite ve programları belirliyoruz",
      "Başvuru şansınızı hesaplıyoruz",
      "Alternatif seçenekler sunuyoruz",
    ],
    color: "accent",
  },
  {
    step: 3,
    title: "Başvuru Hazırlığı",
    duration: "2-4 hafta",
    icon: FileText,
    description: "Tüm belgelerinizi hazırlayıp ve başvurularınızı yapıyoruz",
    details: [
      "Motivasyon mektubu yazıyoruz",
      "CV'nizi profesyonel olarak hazırlıyoruz",
      "Başvuruları zamanında gönderiyoruz",
    ],
    color: "secondary",
  },
  {
    step: 4,
    title: "Yerleşim Süreci",
    duration: "4-6 hafta",
    icon: Plane,
    description:
      "Almanya'da yerleşim sürecinizi yönetir ve size destek oluruz",
    details: [
      "Gerekli resmi belgeleri hazırlıyoruz",
      "Randevu alıyor ve takip ediyoruz",
      "Mülakata hazırlık desteği veriyoruz",
      "Konaklama ve sigorta işlemleri",
    ],
    color: "primary",
  },
];

const requirements = [
  {
    category: "Üniversite basvurusu için gerekli belgeler",
    items: [
      "Lise diploma ve transkript",
      "Üniversite diploma ve transkript (varsa)",
      "Dil sınavı sonuçları (IELTS/TOEFL/Almanca)",
      "YÖS/SAT sonuçları (eğer varsa)",
    ],
  },

  {
    category: "Yerleşim süreci için gerekli belgeler",
    items: [
      "Sponsor belgesi veya bloke hesap belgesi",
      "Burs belgesi (eğer varsa)",
      "Yurt dışı sağlık sigortası",
      "Sabıka kaydı",
      "CV ve özgeçmiş",
    ],
  },
];

export default function Process() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold text-foreground mb-6"
              data-testid="process-page-title"
            >
              Başvuru Sürecimiz
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              data-testid="process-page-description"
            >
              Almanya'da eğitim hayalinizi gerçekleştirmek için adım adım
              rehberlik ediyoruz. Sürecin her aşamasında yanınızdayız.
            </p>
          </div>

          {/* Process Steps */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold text-foreground mb-12 text-center"
              data-testid="process-steps-title"
            >
              Süreç Aşamaları
            </h2>

            <div className="space-y-12">
              {processSteps.map((process, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  data-testid={`process-step-${process.step}`}
                >
                  <div
                    className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-${process.color} rounded-full flex items-center justify-center text-${process.color}-foreground text-2xl font-bold`}
                      >
                        {process.step}
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold text-foreground"
                          data-testid={`process-step-title-${process.step}`}
                        >
                          {process.title}
                        </h3>
                      </div>
                    </div>

                    <p
                      className="text-lg text-muted-foreground"
                      data-testid={`process-step-description-${process.step}`}
                    >
                      {process.description}
                    </p>

                    <ul className="space-y-3">
                      {process.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start space-x-3"
                          data-testid={`process-step-detail-${process.step}-${detailIndex}`}
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div
                      className={`bg-${process.color}/5 p-8 rounded-xl border-2 border-${process.color}/20`}
                    >
                      <process.icon
                        className={`w-24 h-24 text-${process.color} mx-auto`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold text-foreground mb-12 text-center"
              data-testid="requirements-title"
            >
              Gerekli Belgeler
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border"
                  data-testid={`requirement-category-${index}`}
                >
                  <h3
                    className="text-xl font-semibold text-foreground mb-4"
                    data-testid={`requirement-category-title-${index}`}
                  >
                    {requirement.category}
                  </h3>
                  <ul className="space-y-3">
                    {requirement.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                        data-testid={`requirement-item-${index}-${itemIndex}`}
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
