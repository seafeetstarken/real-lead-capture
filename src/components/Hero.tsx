import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import logo from "@/assets/realizzati-logo-vertical.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const scrollToAmbientes = () => {
    document.getElementById("ambientes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white pt-24">
        {/* Logo */}
        <div className="mb-8 animate-fade-in flex justify-center">
          <img
            src={logo}
            alt="Realizzati Móveis"
            className="h-32 md:h-40 drop-shadow-[0_0_25px_rgba(255,255,255,1)] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] filter"
          />
        </div>

        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl animate-fade-in text-shadow-lg tracking-tight">
          Móveis Sob Medida de Alto Padrão
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-lg md:text-2xl text-white/90 animate-fade-in font-light leading-relaxed">
          Transforme seus ambientes com móveis exclusivos, projetados especialmente
          para você. Qualidade incomparável, design sofisticado e acabamento
          perfeito.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="shimmer text-lg font-semibold shadow-luxury px-8 py-6 text-xl"
          >
            Solicitar Orçamento Grátis
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToAmbientes}
            className="text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-xl backdrop-blur-sm"
          >
            Conhecer Ambientes
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;
