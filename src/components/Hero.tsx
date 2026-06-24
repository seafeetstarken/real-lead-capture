import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-vertical-light.png";
import { ChevronDown } from "lucide-react";
import { trackCtaClick } from "@/lib/gtm";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    trackCtaClick("Falar com Projetista Especialista", "Hero");
    document.getElementById("lead-form")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const scrollToAmbientes = () => {
    trackCtaClick("Ver Ambientes Planejados", "Hero");
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
        <div className={`mb-8 animate-fade-in flex justify-center transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}>
          <img
            src={logo}
            alt="Realizzati Móveis"
            className="h-32 md:h-40 drop-shadow-2xl"
          />
        </div>

        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl animate-fade-in text-shadow-lg tracking-tight">
          Móveis Planejados <span className="text-primary italic">Sob Medida</span>
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-lg md:text-2xl text-white/90 animate-fade-in font-light leading-relaxed">
          A exatidão da execução industrial unida à sofisticação de acabamentos finos. 
          Cavas usinadas, veios de madeira contínuos e alinhamentos geométricos perfeitos para projetos exigentes.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="shimmer text-lg font-semibold shadow-luxury px-8 py-6 text-xl"
          >
            Falar com Projetista Especialista
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToAmbientes}
            className="text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-xl backdrop-blur-sm"
          >
            Ver Ambientes Planejados
          </Button>
        </div>

        {/* Offers */}
        <div className="mt-12 flex flex-col gap-3 items-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
            <span className="text-primary font-semibold text-base md:text-lg">
              Condições especiais: 10% de desconto sob investimento à vista
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white/90 font-medium text-sm md:text-base">
              Plano de parcelamento personalizado em até 24x sem entrada (taxas sob consulta abaixo de 1% a.m.)
            </span>
          </div>
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
