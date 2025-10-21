import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100),
  phone: z.string().trim().min(10, { message: "Telefone inválido" }).max(20),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  message: z.string().trim().max(1000),
});

const LeadForm = () => {
  const { toast } = useToast();
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
      
      // Send to WhatsApp
      const whatsappNumber = "5547330843390";
      const whatsappMessage = encodeURIComponent(
        `*Nova Lead - Realizzati Móveis*\n\n` +
        `*Nome:* ${validatedData.name}\n` +
        `*Telefone:* ${validatedData.phone}\n` +
        `*Email:* ${validatedData.email}\n` +
        `*Mensagem:* ${validatedData.message || "Solicito orçamento"}`
      );
      
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
      
      toast({
        title: "Redirecionando para o WhatsApp",
        description: "Você será direcionado para falar com nossa equipe.",
      });
      
      // Reset form
      setFormData({ name: "", phone: "", email: "", message: "" });
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
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="text-primary-foreground">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Agende seu <span className="text-accent">Orçamento</span>
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Entre em contato e transforme sua casa com móveis sob medida de alto padrão.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Telefone / WhatsApp</p>
                  <p className="text-lg font-semibold">(47) 3308-4390</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <p className="text-lg font-semibold">contato@realizzatimoveis.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Atendimento</p>
                  <p className="text-lg font-semibold">Médio Vale e Litoral - SC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Solicite um Orçamento</CardTitle>
              <CardDescription>
                Preencha o formulário e entraremos em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    maxLength={100}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    maxLength={20}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={255}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre o projeto que você tem em mente..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                  disabled={isSubmitting}
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
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
