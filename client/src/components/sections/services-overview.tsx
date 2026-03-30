import ServiceCard from "@/components/ui/service-card";
import { GraduationCap, FileText, Languages, IdCard, Home, Handshake } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Üniversite Seçimi",
    description: "Profilinize en uygun Almanya üniversitelerini belirleyip başvuru stratejinizi oluşturuyoruz.",
    features: ["Üniversite araştırması", "Program analizi", "Şehir rehberi"],
    color: "primary" as const
  },
  {
    icon: FileText,
    title: "Başvuru Hazırlığı", 
    description: "Motivasyon mektubu, CV ve gerekli belgelerinizi profesyonel olarak hazırlıyoruz.",
    features: ["Motivasyon mektubu", "CV hazırlama", "Belge kontrolü"],
    color: "accent" as const
  },
  {
    icon: Languages,
    title: "Dil Eğitimi",
    description: "Almanca seviyenizi geliştirin ve dil sınavlarına hazırlanın.",
    features: ["Almanca kursu", "TestDaF hazırlığı", "DSH hazırlığı"],
    color: "secondary" as const
  },
  {
    icon: IdCard,
    title: "Resmi İşlemler",
    description: "Başvuru sürecinizle ilgili resmi işlemleri baştan sona yönetiyoruz.",
    features: ["Resmi süreç danışmanlığı", "Belge hazırlama", "Randevu takibi"],
    color: "primary" as const
  },
  {
    icon: Home,
    title: "Yerleşim Desteği",
    description: "Almanya'da yaşam kurulumunuzda size rehberlik ediyoruz.",
    features: ["Konaklama bulma", "Banka hesabı", "Sigorta işlemleri"],
    color: "accent" as const
  },
  {
    icon: Handshake,
    title: "Kariyer Danışmanlığı",
    description: "Mezuniyet sonrası kariyer planlamanızda destek sağlıyoruz.",
    features: ["İş arama desteği", "Staj programları", "Networking"],
    color: "secondary" as const
  }
] as const;

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="services-title">Hizmetlerimiz</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            Almanya'da eğitim yolculuğunuzun her adımında yanınızdayız
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
