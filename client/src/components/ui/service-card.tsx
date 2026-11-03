import { translateText, translateNode } from "@/lib/i18n";
import { LucideIcon, Check } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: readonly string[];
  color: "primary" | "accent" | "secondary";
}

export default function ServiceCard({ icon: Icon, title, description, features, color }: ServiceCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent", 
    secondary: "bg-secondary/10 text-secondary"
  };

  return (
    <div className="bg-card p-8 rounded-xl shadow-sm card-hover" data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colorClasses[color]}`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{translateNode(title)}</h3>
      <p className="text-muted-foreground mb-6" data-testid={`service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {translateNode(description)}
      </p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {translateNode(features.map((feature, index) => (
          <li key={index} className="flex items-center" data-testid={`service-feature-${index}`}>
            <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
            {translateNode(feature)}
          </li>
        )))}
      </ul>
    </div>
  );
}
