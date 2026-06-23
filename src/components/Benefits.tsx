import { Ruler, Sparkles, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Ruler,
    title: "Projeto Sob Medida",
    description: "Cada móvel é projetado exclusivamente para seu espaço, aproveitando cada centímetro com inteligência."
  },
  {
    icon: Sparkles,
    title: "Alto Padrão",
    description: "Marcenaria 4.0 com máquinas CNC e softwares inteligentes que garantem acabamento impecável e encaixes milimétricos."
  },
  {
    icon: Users,
    title: "15 Anos de Experiência",
    description: "Experiência consolidada no Médio Vale e Litoral de SC, com centenas de projetos realizados."
  },
  {
    icon: Award,
    title: "Excelência Garantida",
    description: "Atendimento personalizado e acompanhamento em todas as etapas do seu projeto."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Por Que Escolher a Realizzati?
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Mais de uma década de experiência criando móveis exclusivos que
            transformam ambientes em obras de arte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl glass shadow-card hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
