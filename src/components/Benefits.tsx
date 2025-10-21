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
    description: "Materiais premium e acabamentos sofisticados que transformam ambientes em obras de arte."
  },
  {
    icon: Users,
    title: "Mais de 12 Anos",
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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-primary">Realizzati</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformamos sua visão em realidade com móveis planejados que unem design e funcionalidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
