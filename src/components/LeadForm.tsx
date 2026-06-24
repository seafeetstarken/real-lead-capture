import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Tag, CreditCard } from "lucide-react";
import { z } from "zod";
import { getAttributionData } from "@/lib/attribution";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100)
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { message: "Nome contém caracteres inválidos" }),
  phone: z.string().trim().min(10, { message: "Telefone inválido" }).max(20)
    .regex(/^[\d()\s-]+$/, { message: "Telefone contém caracteres inválidos" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  message: z.string().trim().max(1000)
    .regex(/^[^<>]*$/, { message: "Mensagem contém caracteres não permitidos" }),
});

const LeadForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Salvar dados no sessionStorage
      sessionStorage.setItem('leadFormData', JSON.stringify(validatedData));
      
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
                email: { stringValue: validatedData.email },
                message: { stringValue: validatedData.message || "" },
                createdAt: { stringValue: new Date().toISOString() },
                utm_source: { stringValue: attribution.utm_source },
                utm_medium: { stringValue: attribution.utm_medium },
                utm_campaign: { stringValue: attribution.utm_campaign },
                utm_content: { stringValue: attribution.utm_content },
                utm_term: { stringValue: attribution.utm_term },
                gclid: { stringValue: attribution.gclid },
                fbclid: { stringValue: attribution.fbclid },
                fbp: { stringValue: attribution.fbp },
                fbc: { stringValue: attribution.fbc },
                user_agent: { stringValue: attribution.user_agent },
                page_url: { stringValue: attribution.page_url },
              },
            }),
          }
        );
      } catch (cloudError) {
        // Loga o erro mas não impede a navegação para não estragar a experiência do usuário
        console.error("Falha ao persistir lead no Firestore:", cloudError);
      }
      
      // Reset form
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      // Navegar para página de obrigado
      navigate('/obrigado');
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
    <section id="lead-form" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="text-foreground reveal">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 tracking-tight">
              Estudo Técnico do seu Espaço
            </h2>
            <p className="text-xl mb-12 text-muted-foreground font-light leading-relaxed">
              Fale com um projetista especialista em alto padrão e inicie a viabilidade técnica do seu mobiliário sob medida. 
              Analisamos seu projeto arquitetônico, cronogramas de obra e alinhamentos milimétricos.
            </p>

            <div className="space-y-8">
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

          {/* Form */}
          <Card className="shadow-glass glass border-0 reveal">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    required
                    maxLength={100}
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-semibold">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    required
                    maxLength={20}
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-semibold">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    required
                    maxLength={255}
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-semibold">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva seu projeto de móveis sob medida ou ambiente que deseja planejar"
                    rows={5}
                    maxLength={1000}
                    className="mt-2 text-base"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full shimmer text-lg font-semibold py-7"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Iniciar Estudo de Viabilidade"}
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
