import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Bed, Shirt, Bath } from "lucide-react";
import furniture1 from "@/assets/furniture-1.jpg";
import furniture2 from "@/assets/furniture-2.jpg";
import furniture3 from "@/assets/furniture-3.jpg";

const ambientes = [
  {
    image: furniture1,
    title: "Closets Sob Medida",
    icon: Shirt,
    features: ["Organização Inteligente", "Iluminação LED", "Gavetas Premium"],
    description: "Closets planejados com design sofisticado e máxima funcionalidade para organizar seu guarda-roupa com elegância."
  },
  {
    image: furniture2,
    title: "Quartos Planejados",
    icon: Bed,
    features: ["Cabeceiras Exclusivas", "Armários Embutidos", "Design Personalizado"],
    description: "Transforme seu quarto em um refúgio perfeito com móveis sob medida que combinam conforto e estilo."
  },
  {
    image: furniture3,
    title: "Banheiros Premium",
    icon: Bath,
    features: ["Acabamento Sofisticado", "Móveis Resistentes", "Projeto Exclusivo"],
    description: "Banheiros planejados com materiais de alta qualidade e design contemporâneo para seu bem-estar diário."
  }
];

const Properties = () => {
  const whatsappNumber = "5547330843390";
  
  const handleAmbienteInterest = (ambienteTitle: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${ambienteTitle}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="ambientes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ambientes <span className="text-primary">Exclusivos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Móveis planejados sob medida para cada ambiente da sua casa. Design sofisticado e funcionalidade perfeita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ambientes.map((ambiente, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={ambiente.image} 
                  alt={ambiente.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ambiente.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                      {ambiente.title}
                    </h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {ambiente.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  {ambiente.description}
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                  onClick={() => handleAmbienteInterest(ambiente.title)}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary p-8 rounded-lg text-center shadow-luxury">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-8 h-8 text-primary-foreground" />
            <h3 className="font-serif text-3xl font-bold text-primary-foreground">
              Cozinhas Sob Medida
            </h3>
          </div>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Projetos completos de cozinhas planejadas com acabamento premium. Funcionalidade e beleza que transformam o coração da sua casa.
          </p>
          <Button 
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onClick={() => handleAmbienteInterest("Cozinha Planejada")}
          >
            Conhecer Cozinhas Planejadas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
