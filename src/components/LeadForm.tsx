import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { getAttributionData } from "@/lib/attribution";
import { trackLeadSuccess, trackWhatsAppClick } from "@/lib/gtm";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100)
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { message: "Nome contém caracteres inválidos" }),
  phone: z.string().trim().min(10, { message: "Telefone inválido" }).max(20)
    .regex(/^[\d()\s-]+$/, { message: "Telefone contém caracteres inválidos" }),
  message: z.string().trim().max(1000)
    .regex(/^[^<>]*$/, { message: "Mensagem contém caracteres não permitidos" }),
});

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Capturar dados de atribuição de marketing e cookies
      const attribution = getAttributionData();
      
      // Enviar os dados do lead em tempo real para o Firestore na nuvem
      try {
        await fetch(
          "https://firestore.googleapis.com/v1/projects/seafeet-starken-core/databases/(default)/documents/leads?key=AIzaSyBzrCiUVyrbutrgwBHcxPf2mWIjWqOqBGA",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: {
                tenant: { stringValue: "realizzati_moveis" },
                name: { stringValue: validatedData.name },
                phone: { stringValue: validatedData.phone },
                email: { stringValue: "" },
                message: { stringValue: validatedData.message || "" },
                createdAt: { stringValue: new Date().toISOString() },
                utm_source: { stringValue: attribution.utm_source || "" },
                utm_medium: { stringValue: attribution.utm_medium || "" },
                utm_campaign: { stringValue: attribution.utm_campaign || "" },
                utm_content: { stringValue: attribution.utm_content || "" },
                utm_term: { stringValue: attribution.utm_term || "" },
                gclid: { stringValue: attribution.gclid || "" },
                fbclid: { stringValue: attribution.fbclid || "" },
                fbp: { stringValue: attribution.fbp || "" },
                fbc: { stringValue: attribution.fbc || "" },
                user_agent: { stringValue: attribution.user_agent || "" },
                page_url: { stringValue: attribution.page_url || "" },
              },
            }),
          }
        );
      } catch (cloudError) {
        console.error("Falha ao persistir lead no Firestore:", cloudError);
      }

      // Rastreamento GTM: Conversão com Enhanced Conversions
      trackLeadSuccess({
        email: "",
        phone: validatedData.phone,
        name: validatedData.name
      });
      
      // Gerar link de WhatsApp dinâmico
      const whatsappNumber = "554733084390";
      const whatsappMessage = encodeURIComponent(
        `Olá! Vim através do site da Realizzati Móveis\n\n` +
        `Nome: ${validatedData.name}\n` +
        `Telefone: ${validatedData.phone}\n` +
        `Mensagem: ${validatedData.message || "Olá, gostaria de solicitar um orçamento!"}`
      );
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

      // Rastrear clique do WhatsApp
      trackWhatsAppClick(whatsappUrl);
      
      toast({
        title: "Dados enviados!",
        description: "Iniciando conversa no WhatsApp...",
      });

      // Reset form
      setFormData({ name: "", phone: "", message: "" });
      
      // Redirecionar diretamente para o WhatsApp
      window.location.href = whatsappUrl;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro no formulário",
          description: error.issues[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-12 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Contact Info */}
          <div className="text-foreground reveal">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight text-center lg:text-left">
              Seu Projeto Exclusivo
            </h2>
            <p className="hidden md:block text-base sm:text-lg md:text-xl mb-6 md:mb-12 text-muted-foreground font-light leading-relaxed">
              Fale com um projetista especializado e receba o detalhamento dos seus ambientes sob medida. Sem compromisso, com atendimento rápido.
            </p>

            <div className="hidden lg:block space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Telefone</h3>
                  <p className="text-muted-foreground text-base">(47) 3308-4390</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">E-mail</h3>
                  <p className="text-muted-foreground text-base">realizzatimoveis@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Atendimento</h3>
                  <p className="text-muted-foreground text-base">Médio Vale e Litoral - SC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form with Double-Bezel (Chanfrado) design system rules */}
          <Card className="shadow-luxury bg-secondary border border-primary/20 rounded-[2rem] p-1.5 reveal">
            <CardContent className="bg-[#1D1311]/55 border border-primary/10 rounded-[1.8rem] p-5 md:p-10 text-white">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-7">
                <div>
                  <Label htmlFor="name" className="text-xs font-semibold tracking-wider text-primary uppercase block mb-1.5">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    required
                    maxLength={100}
                    className="mt-1 bg-[#1D1311]/55 border border-primary/20 rounded-lg px-4 h-10 md:h-12 text-sm md:text-base text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-xs font-semibold tracking-wider text-primary uppercase block mb-1.5">
                    Telefone / WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    required
                    maxLength={20}
                    className="mt-1 bg-[#1D1311]/55 border border-primary/20 rounded-lg px-4 h-10 md:h-12 text-sm md:text-base text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs font-semibold tracking-wider text-primary uppercase block mb-1.5">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva seu projeto de móveis sob medida ou ambiente que deseja planejar"
                    rows={3}
                    maxLength={1000}
                    className="mt-1 bg-[#1D1311]/55 border border-primary/20 rounded-lg px-4 py-3 text-sm md:text-base text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="shimmer w-full text-secondary font-bold py-4 rounded-lg shadow-luxury hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 text-sm tracking-wider uppercase mt-4 h-auto"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
