import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const whatsappNumber = "5547330843390";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de conhecer os imóveis disponíveis.");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Seu Imóvel dos Sonhos
          <span className="block text-secondary mt-2">em Balneário Camboriú</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Encontre apartamentos de luxo com vista para o mar. Exclusividade, conforto e localização privilegiada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8 py-6 h-auto"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
          >
            <Phone className="mr-2 h-5 w-5" />
            Falar com Especialista
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 h-auto bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            onClick={() => document.getElementById('imoveis')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Imóveis
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
