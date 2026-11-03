import { translateText, translateNode } from "@/lib/i18n";
import { Award, Shield, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Uzman Kadro",
    description: "Almanya'da eğitim almış danışmanlar",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description: "Şeffaf süreç ve garanti sistemi",
    bgColor: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description: "Süreç boyunca kesintisiz destek",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: Globe,
    title: "Uluslararası Ağ",
    description: "50+ partner üniversite",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-foreground">{translateText(" Neden Envoedu Germany? ")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{translateText(" 10 yılı aşkın deneyimimiz ve Almanya eğitim sistemi konusundaki derin bilgimizle Türk öğrencilere özel hizmet sunuyoruz. Her öğrencinin benzersiz hikayesini anlayarak kişiselleştirilmiş çözümler üretiyoruz. ")}</p>
            
            <div className="grid grid-cols-2 gap-8">
              {translateNode(features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="space-y-4" data-testid={`feature-${index}`}>
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`${feature.iconColor} h-6 w-6`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{translateNode(feature.title)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {translateNode(feature.description)}
                    </p>
                  </div>
                );
              }))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt={translateText("Education consultant meeting")} 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-experience">10+</div>
                <div className="text-sm text-muted-foreground">{translateText("Yıl Deneyim")}</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent p-4 rounded-lg text-accent-foreground">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="font-semibold" data-testid="stat-satisfaction">{translateText("4.9/5 Müşteri Memnuniyeti")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
