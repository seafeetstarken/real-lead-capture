import { Award, Users, Home, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Anos de Experiência",
  },
  {
    icon: Home,
    value: "500+",
    label: "Projetos Realizados",
  },
  {
    icon: Users,
    value: "100%",
    label: "Clientes Satisfeitos",
  },
  {
    icon: Sparkles,
    value: "Alto Padrão",
    label: "Qualidade Premium",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center space-y-3 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold font-serif text-primary">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-secondary-foreground/80">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
