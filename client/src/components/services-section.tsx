import { GraduationCap, FileText, Languages, IdCard, Home, Handshake, Check } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Üniversite Seçimi",
    description: "Profilinize en uygun Almanya üniversitelerini belirleyip başvuru stratejinizi oluşturuyoruz.",
    features: ["Üniversite araştırması", "Program analizi", "Şehir rehberi"],
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: FileText,
    title: "Başvuru Hazırlığı",
    description: "Motivasyon mektubu, CV ve gerekli belgelerinizi profesyonel olarak hazırlıyoruz.",
    features: ["Motivasyon mektubu", "CV hazırlama", "Belge kontrolü"],
    bgColor: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: Languages,
    title: "Dil Eğitimi",
    description: "Almanca seviyenizi geliştirin ve dil sınavlarına hazırlanın.",
    features: ["Almanca kursu", "TestDaF hazırlığı", "DSH hazırlığı"],
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: IdCard,
    title: "Resmi İşlemler",
    description: "Başvuru sürecinizle ilgili resmi işlemleri baştan sona yönetiyoruz.",
    features: ["Resmi süreç danışmanlığı", "Belge hazırlama", "Randevu takibi"],
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Home,
    title: "Yerleşim Desteği",
    description: "Almanya'da yaşam kurulumunuzda size rehberlik ediyoruz.",
    features: ["Konaklama bulma", "Banka hesabı", "Sigorta işlemleri"],
    bgColor: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: Handshake,
    title: "Kariyer Danışmanlığı",
    description: "Mezuniyet sonrası kariyer planlamanızda destek sağlıyoruz.",
    features: ["İş arama desteği", "Staj programları", "Networking"],
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Almanya'da eğitim yolculuğunuzun her adımında yanınızdayız
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm card-hover" data-testid={`service-card-${index}`}>
                <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
