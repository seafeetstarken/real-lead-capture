import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-secondary" />
              <span className="font-serif text-2xl font-bold">Realizzi Imóveis</span>
            </div>
            <p className="text-primary-foreground/80">
              Seu imóvel dos sonhos em Balneário Camboriú está aqui.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>(47) 3308-4390</li>
              <li>contato@realizzatimoveis.com.br</li>
              <li>Balneário Camboriú, SC</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>Sábado: 9h às 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Realizzi Imóveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
