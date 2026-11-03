import { translateText, translateNode } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const universities = [
  {
    name: "Technical University of Munich",
    description: "Almanya'nın en iyi teknik üniversitelerinden biri",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Fen Bilimleri"]
  },
  {
    name: "Heidelberg Üniversitesi",
    description: "Almanya'nın en eski ve prestijli üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk"]
  },
  {
    name: "Humboldt Üniversitesi",
    description: "Berlin'in kalbi Unter den Linden'da",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    programs: ["İşletme", "Sosyoloji"]
  }
];

export default function UniversitiesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{translateText("Partner Üniversitelerimiz")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{translateText(" Almanya'nın en prestijli üniversiteleriyle işbirliği halindeyiz ")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translateNode(universities.map((university, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border card-hover" data-testid={`university-card-${index}`}>
              <img 
                src={university.image} 
                alt={translateText(`${university.name} campus`)} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">{translateNode(university.name)}</h3>
              <p className="text-muted-foreground mb-4">{translateNode(university.description)}</p>
              <div className="flex flex-wrap gap-2">
                {translateNode(university.programs.map((program, programIndex) => (
                  <span 
                    key={programIndex} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      programIndex % 2 === 0 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}
                    data-testid={`program-tag-${index}-${programIndex}`}
                  >
                    {translateNode(program)}
                  </span>
                )))}
              </div>
            </div>
          )))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-secondary text-secondary-foreground px-8 py-4 h-auto text-base font-semibold hover:bg-secondary/90"
            data-testid="button-view-all-universities"
          >{translateText(" Tüm Üniversiteleri Görüntüle ")}</Button>
        </div>
      </div>
    </section>
  );
}
