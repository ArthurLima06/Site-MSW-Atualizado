import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="text-background/70 hover:text-primary transition-colors">
                  Equipamentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Equipments */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Equipamentos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#equipamentos" className="text-background/70 hover:text-primary transition-colors">
                  Caminhão Munck
                </a>
              </li>
              <li className="text-background/50 italic text-sm">
                Em breve mais opções...
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70">WhatsApp</p>
                  <a href="tel:+5511983969849" className="hover:text-primary transition-colors">
                    (11) 98396-9849
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-background/70">E-mail</p>
                  <a 
                    href="mailto:contato@mswlocacoes.com.br" 
                    className="hover:text-primary transition-colors text-sm break-all"
                  >
                    contato@mswlocacoes.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70">Endereço</p>
                  <p>R José Martins Coelho 140 - Vila Emir</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} MSW Locação de Máquinas e Equipamentos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
