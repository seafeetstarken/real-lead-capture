import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Bed, Shirt, Bath } from "lucide-react";
import closetModern from "@/assets/closet-modern.jpg";
import furniture2 from "@/assets/furniture-2.jpg";
import furniture3 from "@/assets/furniture-3.jpg";

const ambientes = [
  {
    image: closetModern,
    title: "Closets Sob Medida",
    icon: Shirt,
    features: ["Iluminação em LED", "Ferragens de Alta Qualidade", "Moderno e Prático"],
    description: "Closets planejados em MDF com design moderno, iluminação LED integrada e máxima funcionalidade para organizar seu guarda-roupa com elegância."
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
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section id="ambientes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Ambientes Exclusivos
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Cada projeto é único, pensado e executado com perfeição para
            refletir sua personalidade e estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {ambientes.map((ambiente, index) => {
            const Icon = ambiente.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl glass shadow-glass hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={ambiente.image}
                    alt={ambiente.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-card-foreground">
                      {ambiente.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {ambiente.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-start gap-2 text-base"
                      >
                        <span className="text-primary mt-1 font-bold">✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {ambiente.description}
                  </p>
                  <Button
                    className="w-full group-hover:shimmer transition-all duration-300 text-base font-semibold py-6"
                    onClick={scrollToForm}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cozinhas Section */}
        <div className="glass-dark rounded-3xl p-10 md:p-16 text-center shadow-luxury reveal">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            Cozinhas Sob Medida
          </h3>
          <p className="text-white/90 text-xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Transforme sua cozinha no coração do seu lar. Projetos completos que
            combinam funcionalidade, elegância e aproveitamento inteligente de
            cada espaço. Da bancada aos armários, cada detalhe é pensado para
            você.
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="shimmer font-semibold text-lg px-10 py-7 shadow-luxury"
          >
            Conhecer Cozinhas Planejadas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
