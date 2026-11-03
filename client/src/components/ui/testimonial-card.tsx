import { translateText, translateNode } from "@/lib/i18n";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  program: string;
  initials: string;
  color: "primary" | "accent" | "secondary";
  content: string;
}

export default function TestimonialCard({ name, program, initials, color, content }: TestimonialCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    secondary: "bg-secondary/10 text-secondary"
  };

  return (
    <div className="bg-card p-8 rounded-xl shadow-sm border border-border" data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center space-x-1 mb-4">
        {translateNode([...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-accent fill-current" />
        )))}
      </div>
      <p className="text-muted-foreground mb-6 italic" data-testid={`testimonial-content-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        "{translateNode(content)}"
      </p>
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
          <span className="font-semibold" data-testid={`testimonial-initials-${name.toLowerCase().replace(/\s+/g, '-')}`}>{translateNode(initials)}</span>
        </div>
        <div>
          <div className="font-semibold text-foreground" data-testid={`testimonial-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{translateNode(name)}</div>
          <div className="text-sm text-muted-foreground" data-testid={`testimonial-program-${name.toLowerCase().replace(/\s+/g, '-')}`}>{translateNode(program)}</div>
        </div>
      </div>
    </div>
  );
}
