import { translateText, translateNode } from "@/lib/i18n";
import { Award, Shield, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Uzman Kadro",
    description: "Almanya'da eğitim almış danışmanlar",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description: "Şeffaf süreç ve garanti sistemi",
    color: "accent"
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description: "Süreç boyunca kesintisiz destek",
    color: "secondary"
  },
  {
    icon: Globe,
    title: "Uluslararası Ağ",
    description: "50+ partner üniversite",
    color: "primary"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-foreground" data-testid="about-title">{translateText(" Neden Envoedu Germany? ")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description">{translateText(" 10 yılı aşkın deneyimimiz ve Almanya eğitim sistemi konusundaki derin bilgimizle Türk öğrencilere özel hizmet sunuyoruz. Her öğrencinin benzersiz hikayesini anlayarak kişiselleştirilmiş çözümler üretiyoruz. ")}</p>
            
            <div className="grid grid-cols-2 gap-8">
              {translateNode(features.map((feature, index) => (
                <div key={index} className="space-y-4" data-testid={`about-feature-${index}`}>
                  <div className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center`}>
                    <feature.icon className={`text-${feature.color} text-xl`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`about-feature-title-${index}`}>
                    {translateNode(feature.title)}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`about-feature-description-${index}`}>
                    {translateNode(feature.description)}
                  </p>
                </div>
              )))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt={translateText("Education consultant meeting")} 
              className="rounded-xl shadow-lg w-full h-auto" 
              data-testid="about-image"
            />
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border" data-testid="about-stats-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="about-years-experience">10+</div>
                <div className="text-sm text-muted-foreground">{translateText("Yıl Deneyim")}</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent p-4 rounded-lg text-accent-foreground" data-testid="about-satisfaction-card">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold">{translateText("4.9/5 Müşteri Memnuniyeti")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
