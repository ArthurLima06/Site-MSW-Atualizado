import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!', '_blank');
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/Captura de tela 2025-11-06 182800.png"
                alt="MSW Logo"
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold">MSW</h3>
                <p className="text-sm text-green-400">Locação de Veículos e Equipamentos</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-justify">
              Referência em locação de máquinas para construção civil, oferecendo
              qualidade, segurança e compromisso com seus projetos.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('sobre');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('servicos');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('maquinas');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-green-400 hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Equipamentos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center hover:text-green-400 transition-colors duration-300">
                <MapPin className="flex-shrink-0 mr-3" size={20} />
                <span className="text-gray-400">
                  Rua Joaquim Pedro Getúlio, 6
                </span>
              </li>
              <li className="flex items-center hover:text-green-400 transition-colors duration-300">
                <Phone className="flex-shrink-0 mr-3" size={20} />
                <a href="tel:+5511983969849" className="text-gray-400">
                  (11) 98396-9849
                </a>
              </li>
              <li className="flex items-center hover:text-green-400 transition-colors duration-300">
                <Mail className="flex-shrink-0 mr-3" size={20} />
                <a href="mailto:contato@mswlocacoes.com.br" className="text-gray-400">
                  contato@mswlocacoes.com.br
                </a>
              </li>
              <li className="flex items-center hover:text-green-400 transition-colors duration-300">
                <Clock className="flex-shrink-0 mr-3" size={20} />
                <span className="text-gray-400">
                  Seg - Sex: 7h às 18h
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Solicite seu Orçamento</h4>
            <p className="text-gray-400 mb-6 leading-relaxed text-justify">
              Entre em contato conosco através do WhatsApp e receba um atendimento
              personalizado para sua obra.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 text-white py-4 rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-300 font-medium"
            >
              Falar no WhatsApp
            </button>
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <p className="text-sm text-gray-400 text-justify">
                Atendimento via WhatsApp disponível 24 horas para emergências
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MSW Locação de Veículos e Equipamentos. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
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
