import { Building2, MapPin, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Empreendimentos de Luxo",
    description: "Apartamentos e coberturas com acabamento premium e infraestrutura completa."
  },
  {
    icon: MapPin,
    title: "Localização Privilegiada",
    description: "Próximo às praias mais valorizadas de Balneário Camboriú e principais avenidas."
  },
  {
    icon: Shield,
    title: "Segurança e Confiança",
    description: "Imóveis regularizados com toda documentação e suporte jurídico completo."
  },
  {
    icon: TrendingUp,
    title: "Valorização Garantida",
    description: "Investimento seguro em uma das regiões que mais valoriza no Brasil."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a <span className="text-secondary">Realizzi</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos mais do que imóveis, proporcionamos o estilo de vida que você sempre sonhou.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
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
