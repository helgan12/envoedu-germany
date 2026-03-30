import ServiceCard from "@/components/ui/service-card";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import { GraduationCap, FileText, Languages, IdCard } from "lucide-react";

const mainServices = [
  {
    icon: GraduationCap,
    title: "Üniversite Seçimi",
    description:
      "Profilinize en uygun Almanya üniversitelerini belirleyip başvuru stratejinizi oluşturuyoruz.",
    features: [],
    color: "primary" as const,
  },
  {
    icon: FileText,
    title: "Başvuru Hazırlığı",
    description:
      "Motivasyon mektubu, CV ve gerekli belgelerinizi profesyonel olarak hazırlıyoruz.",
    features: [],
    color: "accent" as const,
  },
  {
    icon: Languages,
    title: "Dil Eğitimi",
    description:
      "Almanca seviyenizi geliştirin ve dil sınavlarına hazırlanın. Bunun için size özel en verimli dil kursunu analiz ederek öneriyoruz.",
    features: [],
    color: "secondary" as const,
  },
  {
    icon: IdCard,
    title: "Resmi İşlemler",
    description: "Başvuru sürecinizle ilgili resmi işlemleri baştan sona yönetiyoruz.",
    features: [],
    color: "primary" as const,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold text-foreground mb-6"
              data-testid="services-page-title"
            >
              Hizmetlerimiz
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              data-testid="services-page-description"
            >
              Almanya'da eğitim yolculuğunuzun her adımında kapsamlı destek
              sunuyoruz.
            </p>
          </div>

          {/* Main Services */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold text-foreground mb-8 text-center"
              data-testid="main-services-title"
            >
              Ana Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
