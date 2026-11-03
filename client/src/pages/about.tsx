import { translateText, translateNode } from "@/lib/i18n";
import {
  Award,
  Shield,
  Clock,
  Globe,
  Users,
  Target,
  Heart,
  Star,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

const teamMembers = [];

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold text-foreground mb-6"
              data-testid="about-page-title"
            >{translateText(" Hakkımızda ")}</h1>
            <p
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              data-testid="about-page-description"
            >{translateText(" 2020'ten beri öğrencilerin Almanya'da eğitim hayallerini gerçekleştirmelerine yardımcı oluyoruz. Deneyimli kadromuz ve güvenilir hizmetimizle binlerce öğrenciye ulaştık. ")}</p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2
                  className="text-3xl font-bold text-foreground mb-4"
                  data-testid="about-mission-title"
                >{translateText(" Misyonumuz ")}</h2>
                <p
                  className="text-lg text-muted-foreground leading-relaxed"
                  data-testid="about-mission-description"
                >{translateText(" Öğrencilerin Almanya'da kaliteli eğitim alabilmeleri için kapsamlı, güvenilir ve kişiselleştirilmiş danışmanlık hizmetleri sunarak onların akademik ve kişisel gelişimlerine katkıda bulunmak. ")}</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h2
                  className="text-3xl font-bold text-foreground mb-4"
                  data-testid="about-vision-title"
                >{translateText(" Vizyonumuz ")}</h2>
                <p
                  className="text-lg text-muted-foreground leading-relaxed"
                  data-testid="about-vision-description"
                >{translateText(" Türkiye'nin en güvenilir ve başarılı Almanya eğitim danışmanlığı olmak. Her yıl daha fazla öğrencinin hayallerine kavuşmasına yardımcı ederek Türk-Alman eğitim köprüsünü güçlendirmek. ")}</p>
              </div>
            </div>

            <div className="relative"></div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2
              className="text-4xl font-bold text-foreground mb-12 text-center"
              data-testid="why-choose-us-title"
            >{translateText(" Neden Bizi Tercih Etmelisiniz? ")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {translateNode([
                {
                  icon: Award,
                  title: "Uzman Kadro",
                  description:
                    "Almanya'da eğitim almış deneyimli danışmanlarımız",
                  color: "primary",
                },
                {
                  icon: Shield,
                  title: "Güvenilir Hizmet",
                  description: "Şeffaf süreç ve %98 başarı oranı garantisi",
                  color: "accent",
                },

                {
                  icon: Globe,
                  title: "Geniş Ağ",
                  description: "50+ üniversite ve güçlü mezun ağı",
                  color: "primary",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center space-y-4"
                  data-testid={`feature-${index}`}
                >
                  <div
                    className={`mx-auto w-16 h-16 bg-${feature.color}/10 rounded-xl flex items-center justify-center`}
                  >
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <h3
                    className="text-xl font-semibold text-foreground"
                    data-testid={`feature-title-${index}`}
                  >
                    {translateNode(feature.title)}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`feature-description-${index}`}
                  >
                    {translateNode(feature.description)}
                  </p>
                </div>
              )))}
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-muted rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-4xl font-bold text-foreground mb-6"
                  data-testid="our-story-title"
                >{translateText(" Hikayemiz ")}</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p data-testid="story-paragraph-1">{translateText(" Envoedu Germany, 2020 yılında Dr. Mehmet Yılmaz tarafından kuruldu. Kendisi de Almanya'da eğitim almış biri olarak, Türkiye'de okuyan öğrencilerin yaşadığı zorlukları çok iyi biliyordu. ")}</p>
                  <p data-testid="story-paragraph-2">{translateText(" İlk yıllarda sadece birkaç öğrenciye hizmet verirken, şimdi yılda yüzlerce öğrencinin Almanya'daki üniversitelere yerleşmesine yardımcı oluyoruz. ")}</p>
                  <p data-testid="story-paragraph-3">{translateText(" Bugün uzman ekibimizle, bu sürecin her aşamasında öğrencilerimizin yanındayız. ")}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {translateNode([
                  { year: "2020", title: "Kuruluş", desc: "İlk adım atıldı" },
                  { year: "2021", title: "Büyüme", desc: "Ekip genişletildi" },
                  {
                    year: "2024",
                    title: "500+ Öğrenci",
                    desc: "Başarı hikayeleri",
                  },
                ].map((milestone, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg text-center"
                    data-testid={`milestone-${index}`}
                  >
                    <div
                      className="text-2xl font-bold text-primary mb-2"
                      data-testid={`milestone-year-${index}`}
                    >
                      {translateNode(milestone.year)}
                    </div>
                    <div
                      className="font-semibold text-foreground mb-1"
                      data-testid={`milestone-title-${index}`}
                    >
                      {translateNode(milestone.title)}
                    </div>
                    <div
                      className="text-sm text-muted-foreground"
                      data-testid={`milestone-description-${index}`}
                    >
                      {translateNode(milestone.desc)}
                    </div>
                  </div>
                )))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2
              className="text-4xl font-bold text-foreground mb-12 text-center"
              data-testid="values-title"
            >{translateText(" Değerlerimiz ")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translateNode([
                {
                  icon: Heart,
                  title: "Öğrenci Odaklılık",
                  description:
                    "Her öğrencimizin benzersiz hikayesini anlar, kişiselleştirilmiş çözümler sunarız.",
                },
                {
                  icon: Shield,
                  title: "Güvenilirlik",
                  description:
                    "Şeffaf süreçler, dürüst iletişim ve tutarlı hizmet kalitesi ile güven inşa ederiz.",
                },
                {
                  icon: Users,
                  title: "Ekip Çalışması",
                  description:
                    "Deneyimli ekibimizle birlikte hareket ederek en iyi sonuçları elde ederiz.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center space-y-4"
                  data-testid={`value-${index}`}
                >
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-foreground"
                    data-testid={`value-title-${index}`}
                  >
                    {translateNode(value.title)}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`value-description-${index}`}
                  >
                    {translateNode(value.description)}
                  </p>
                </div>
              )))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
