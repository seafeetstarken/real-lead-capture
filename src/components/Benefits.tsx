import { Ruler, Sparkles, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Ruler,
    title: "Geometria Livre",
    description: "Mobiliário planejado adaptado ao milímetro exigido pelo projeto arquitetônico, sem as limitações de modulação engessada."
  },
  {
    icon: Sparkles,
    title: "Marcenaria de Precisão",
    description: "Processo digital com usinagem CNC computadorizada, assegurando cavas limpas e alinhamentos geométricos impecáveis."
  },
  {
    icon: Users,
    title: "Rastreabilidade e Prazos",
    description: "Garantia contratual de pontualidade com cronogramas e relatórios de progresso transparentes em cada etapa."
  },
  {
    icon: Award,
    title: "Suporte Técnico Ativo",
    description: "Garantia estrutural de 5 anos com suporte pós-venda direto para regulagens e manutenção preventiva de longo prazo."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Rigor Técnico e Engenharia de Detalhe
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A segurança e consistência de uma indústria moderna unidas à exclusividade e refino da marcenaria fina sob medida.
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
