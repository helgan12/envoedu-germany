import { translateText, translateNode } from "@/lib/i18n";
import { CalendarCheck, GraduationCap, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-gradient text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <GraduationCap className="w-4 h-4" />
              <span>{translateText("Almanya'da Eğitim Fırsatları")}</span>
            </div>
            
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              data-testid="hero-title"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">{translateText(" Almanya'da Eğitim ")}</span>
              <br />
              <span className="text-foreground">{translateText("Hayalinizi")}</span>
              <br />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">{translateText(" Gerçeğe Dönüştürün ")}</span>
            </h1>
            
            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              data-testid="hero-description"
            >{translateText(" Sizler için özel olarak tasarlanmış kapsamlı danışmanlık hizmetleri ile Almanya'daki en iyi üniversitelere adım atın. ")}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button
                  className="group relative bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto overflow-hidden"
                  data-testid="button-consultation"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  <CalendarCheck className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{translateText("Ücretsiz Danışmanlık Al")}</span>
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    data-testid="stat-universities"
                  >
                    100+
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">{translateText(" Üniversite Kabulü ")}</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-secondary/10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-1.5 sm:p-2 bg-secondary/10 rounded-lg">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
                    data-testid="stat-success-rate"
                  >
                    98%
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">{translateText(" Başarı Oranı ")}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt={translateText("Students studying in German university")}
              className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white/50"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
