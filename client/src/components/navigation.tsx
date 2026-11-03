import { translateText, translateNode } from "@/lib/i18n";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">{translateText("Envoedu Germany")}</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >{translateText(" Ana Sayfa ")}</button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >{translateText(" Hizmetler ")}</button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >{translateText(" Hakkımızda ")}</button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-process"
            >{translateText(" Süreç ")}</button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-testimonials"
            >{translateText(" Yorumlar ")}</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >{translateText(" İletişim ")}</button>
          </div>
          
          <div className="hidden md:flex space-x-2 text-sm text-muted-foreground">
            <span>{translateText("TR")}</span>
            <span>|</span>
            <span>{translateText("DE")}</span>
            <span>|</span>
            <span>{translateText("EN")}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {translateNode(isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />)}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {translateNode(isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-home"
              >{translateText(" Ana Sayfa ")}</button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-services"
              >{translateText(" Hizmetler ")}</button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-about"
              >{translateText(" Hakkımızda ")}</button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-process"
              >{translateText(" Süreç ")}</button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-testimonials"
              >{translateText(" Yorumlar ")}</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-contact"
              >{translateText(" İletişim ")}</button>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
