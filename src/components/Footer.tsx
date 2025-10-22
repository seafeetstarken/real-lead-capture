import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/realizzati-logo-horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src={logo}
              alt="Realizzati Móveis"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Transformamos casas em lares únicos com móveis sob medida de alto padrão há mais de 12 anos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-secondary-foreground/80">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (47) 3308-4390
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@realizzatimoveis.com.br
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Médio Vale e Litoral - SC
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/80">
          <p>&copy; 2024 Realizzati Móveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
