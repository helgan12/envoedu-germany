import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "İlk Görüşme",
    description: "Ücretsiz danışmanlık görüşmesi ile hedeflerinizi belirleriz",
    bgColor: "bg-primary"
  },
  {
    number: 2,
    title: "Profil Analizi",
    description: "Akademik geçmişinizi analiz ederek size uygun programları seçeriz",
    bgColor: "bg-accent"
  },
  {
    number: 3,
    title: "Başvuru Hazırlığı",
    description: "Tüm belgelerinizi hazırlar ve başvurularınızı yaparız",
    bgColor: "bg-secondary"
  },
  {
    number: 4,
    title: "Yerleşim Süreci",
    description: "Almanya'da yerleşim sürecinizi yönetir ve size destek oluruz",
    bgColor: "bg-primary"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Başvuru Sürecimiz</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Adım adım rehberlik ile Almanya'da eğitim hayalinizi gerçekleştirin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4" data-testid={`process-step-${index}`}>
              <div className={`mx-auto w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold`}>
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-primary text-primary-foreground px-8 py-4 h-auto text-base font-semibold hover:bg-primary/90"
            data-testid="button-process-details"
          >
            Süreç Hakkında Detaylar
          </Button>
        </div>
      </div>
    </section>
  );
}
