import { translateText, translateNode } from "@/lib/i18n";
import { CalendarCheck, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section id="home" className="hero-gradient text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">{translateText(" Almanya'da Eğitim Hayalinizi ")}<span className="text-accent">{translateText(" Gerçeğe")}</span>{translateText(" Dönüştürün ")}</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">{translateText(" Türk öğrenciler için özel olarak tasarlanmış kapsamlı danışmanlık hizmetleri ile Almanya'daki en iyi üniversitelere adım atın. ")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-accent text-accent-foreground px-8 py-4 h-auto text-base font-semibold hover:bg-accent/90"
                  data-testid="button-free-consultation"
                >
                  <CalendarCheck className="mr-2 h-5 w-5" />{translateText(" Ücretsiz Danışmanlık Al ")}</Button>
              </Link>
              <Button 
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 h-auto text-base font-semibold hover:bg-primary-foreground hover:text-primary"
                data-testid="button-success-stories"
              >
                <Play className="mr-2 h-5 w-5" />{translateText(" Başarı Hikayelerini İzle ")}</Button>
            </div>
            <div className="flex space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold" data-testid="stat-students">500+</div>
                <div className="text-sm text-primary-foreground/80">{translateText("Başarılı Öğrenci")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" data-testid="stat-universities">50+</div>
                <div className="text-sm text-primary-foreground/80">{translateText("Partner Üniversite")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" data-testid="stat-success-rate">98%</div>
                <div className="text-sm text-primary-foreground/80">{translateText("Başarı Oranı")}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt={translateText("Students studying in German university")} 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-card"></div>
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-card"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-card"></div>
                </div>
                <div className="text-sm font-medium text-card-foreground" data-testid="text-monthly-enrollments">{translateText(" Bu ay 24 öğrenci kaydoldu ")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
