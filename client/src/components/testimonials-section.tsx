import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    content: "Envoedu sayesinde hayalim olan Technical University of Munich'e kabul aldım. Süreç boyunca aldığım profesyonel destek muhteşemdi.",
    author: "Ahmet Yılmaz",
    program: "Makine Mühendisliği, TUM",
    initials: "AY",
    bgColor: "bg-primary/10",
    textColor: "text-primary"
  },
  {
    rating: 5,
    content: "Almanca seviyem sıfırdı, tüm resmi işlemler karmaşık görünüyordu. Envoedu ile her şey çok kolay oldu. Şimdi Berlin'de mutlu bir öğrenciyim.",
    author: "Zeynep Kaya",
    program: "İşletme, Humboldt Üniversitesi",
    initials: "ZK",
    bgColor: "bg-accent/10",
    textColor: "text-accent"
  },
  {
    rating: 5,
    content: "Tıp fakültesi kabul sürecim gerçekten zordu ama Envoedu ekibi beni hiç yalnız bırakmadı. Heidelberg Üniversitesi'nde tıp okuyorum şimdi.",
    author: "Mehmet Özkan",
    program: "Tıp, Heidelberg Üniversitesi",
    initials: "MÖ",
    bgColor: "bg-secondary/10",
    textColor: "text-secondary"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Başarı Hikayeleri</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Öğrencilerimizin deneyimlerini dinleyin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border" data-testid={`testimonial-${index}`}>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                  <span className={`${testimonial.textColor} font-semibold`}>{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
