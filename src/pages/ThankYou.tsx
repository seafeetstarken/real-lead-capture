import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal-dark.png";
import { trackLeadSuccess, trackWhatsAppClick } from "@/lib/gtm";

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    // Disparar evento de Lead para o Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }

    // Recuperar dados do formulário do sessionStorage
    const savedData = sessionStorage.getItem('leadFormData');
    
    if (savedData) {
      const data = JSON.parse(savedData);
      
      // Rastreamento GTM: Conversão com Enhanced Conversions
      trackLeadSuccess({
        email: data.email,
        phone: data.phone,
        name: data.name
      });
      
      const whatsappNumber = "554733084390";
      const whatsappMessage = encodeURIComponent(
        `Ola! Vim atraves do site Realizzati Moveis\n\n` +
        `Nome: ${data.name}\n` +
        `Telefone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Mensagem: ${data.message || "Solicito orcamento"}`
      );
      
      const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      setWhatsappUrl(url);

      // Limpar sessionStorage após usar
      sessionStorage.removeItem('leadFormData');
    }

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Redirecionar para WhatsApp após 3 segundos
    const redirectTimer = setTimeout(() => {
      if (whatsappUrl) {
        trackWhatsAppClick(whatsappUrl);
        window.location.href = whatsappUrl;
      }
    }, 3000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimer);
    };
  }, [whatsappUrl]);

  const handleWhatsAppClick = () => {
    if (whatsappUrl) {
      trackWhatsAppClick(whatsappUrl);
      window.location.href = whatsappUrl;
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-glass glass border-0 animate-fade-in">
        <CardContent className="p-12 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logoHorizontal} 
              alt="Realizzati Móveis" 
              className="h-12 object-contain"
            />
          </div>

          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-primary/10 rounded-full animate-scale-in">
              <CheckCircle2 className="w-20 h-20 text-primary" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Obrigado pelo seu contato!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Recebemos sua solicitação de orçamento com sucesso.
          </p>

          <p className="text-lg text-muted-foreground mb-10">
            Você será redirecionado para nosso WhatsApp em{" "}
            <span className="text-primary font-bold text-2xl">{countdown}</span>{" "}
            segundo{countdown !== 1 ? "s" : ""}...
          </p>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full shimmer text-lg font-semibold py-7"
              size="lg"
              disabled={!whatsappUrl}
            >
              Ir para WhatsApp Agora
            </Button>

            <Button
              onClick={handleGoHome}
              variant="outline"
              className="w-full text-lg py-7"
              size="lg"
            >
              Voltar para Página Inicial
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
