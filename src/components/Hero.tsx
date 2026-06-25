import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-vertical-light.png";
import { ChevronDown } from "lucide-react";
import { trackCtaClick, trackWhatsAppClick } from "@/lib/gtm";

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

  const handleWhatsAppDirect = () => {
    const whatsappNumber = "554733084390";
    const message = encodeURIComponent(
      "Olá! Vi o site da Realizzati Móveis e gostaria de falar com um projetista no WhatsApp."
    );
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    trackWhatsAppClick(url);
    window.location.href = url;
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

        <h1 className="mb-6 font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl animate-fade-in text-shadow-lg tracking-tight">
          Móveis Sob Medida <span className="text-primary italic">de Alto Padrão</span>
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-base sm:text-lg md:text-2xl text-white/90 animate-fade-in font-light leading-relaxed px-2">
          Transforme seus ambientes com móveis exclusivos, projetados especialmente para você. 
          Qualidade incomparável, design sofisticado e acabamento perfeito.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center items-center animate-fade-in max-w-md mx-auto sm:max-w-none">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="shimmer text-base sm:text-lg md:text-xl font-semibold shadow-luxury px-6 py-5 md:px-8 md:py-6 h-auto w-full sm:w-auto whitespace-normal text-center leading-normal"
          >
            Falar com Projetista Especialista
          </Button>
          <Button
            size="lg"
            onClick={handleWhatsAppDirect}
            className="text-base sm:text-lg md:text-xl font-semibold bg-emerald-600 hover:bg-emerald-500 text-white border-0 px-6 py-5 md:px-8 md:py-6 h-auto w-full sm:w-auto flex items-center justify-center gap-2 whitespace-normal text-center leading-normal"
          >
            <svg className="w-5 h-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.09-3.93c1.644.976 3.255 1.489 4.908 1.492 5.56.002 10.082-4.515 10.086-10.079.002-2.695-1.047-5.227-2.952-7.133C16.28 2.446 13.75 1.397 11.06 1.397c-5.563 0-10.086 4.517-10.09 10.083-.001 1.93.504 3.812 1.464 5.485L1.442 21.8l4.705-1.73zM17.476 14.3c-.354-.177-2.096-1.033-2.42-1.15-.324-.117-.56-.177-.796.177-.236.354-.913 1.15-1.12 1.384-.207.234-.413.264-.768.087-.354-.177-1.497-.552-2.85-1.76-1.053-.94-1.763-2.1-1.97-2.45-.206-.354-.022-.546.155-.722.16-.16.354-.413.531-.62.176-.207.236-.354.354-.59.117-.237.058-.443-.03-.62-.088-.177-.796-1.916-1.09-2.624-.287-.69-.577-.597-.797-.607-.206-.01-.443-.01-.678-.01-.236 0-.62.088-.943.443-.324.354-1.237 1.21-1.237 2.95 0 1.74 1.267 3.42 1.443 3.655.177.234 2.493 3.807 6.04 5.34.844.36 1.503.576 2.016.74.848.27 1.62.23 2.23.14.68-.1 2.096-.856 2.39-1.684.295-.828.295-1.537.207-1.684-.088-.15-.323-.236-.677-.413z" />
            </svg>
            Conversar no WhatsApp
          </Button>
        </div>

        {/* Offers */}
        <div className="mt-12 flex flex-col gap-3 items-center animate-fade-in w-full max-w-xl mx-auto px-4">
          <div className="flex flex-col sm:inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-center w-full sm:w-auto">
            <span className="text-primary font-semibold text-sm sm:text-base md:text-lg">
              À vista tem 10% de desconto
            </span>
          </div>
          <div className="flex flex-col sm:inline-flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-center w-full sm:w-auto">
            <span className="text-white/90 font-medium text-xs sm:text-sm md:text-base leading-relaxed">
              Parcelamento em até 24x no cartão de crédito sem entrada (juros menores que 1% ao mês)
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
