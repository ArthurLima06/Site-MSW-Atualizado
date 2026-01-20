import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-msw-black.png";

const Contact = () => {
  const whatsappLink = "https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!";

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone / WhatsApp",
      value: "(11) 98396-9849",
      link: "tel:+5511983969849",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      value: "contato@mswlocacoes.com.br",
      link: "mailto:contato@mswlocacoes.com.br",
      isEmail: true,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      value: "R José Martins Coelho 140 - Vila Emir (Escritório)",
      link: "#",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Atendimento",
      value: "Seg - Sex: 7h às 18h | Sáb: 8h às 12h",
      link: "#",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-semibold mb-4">
                Entre em Contato
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-6">
                Solicite Seu <span className="text-primary">Orçamento</span> Agora
              </h2>
              <p className="text-lg text-background/80 leading-relaxed text-justify">
                Nossa equipe está pronta para atender você e oferecer a melhor solução 
                em locação de equipamentos para sua obra. Entre em contato pelo WhatsApp 
                para um atendimento rápido e personalizado.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group p-5 rounded-2xl bg-background/5 hover:bg-primary/20 border border-background/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-background/60 mb-1">
                        {info.title}
                      </p>
                      <p className={`font-semibold text-background ${info.isEmail ? 'text-sm break-all' : ''}`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="whatsapp" size="xl" className="gap-3 pulse-glow">
                <MessageCircle className="w-6 h-6" />
                Falar pelo WhatsApp
              </Button>
            </a>
          </div>

          {/* Right Content - Logo Card */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* 3D Card Stack Effect */}
              <div className="absolute top-6 left-6 w-full h-full bg-primary/30 rounded-3xl transform rotate-3" />
              <div className="absolute top-3 left-3 w-full h-full bg-primary/20 rounded-3xl transform rotate-1" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={logo} 
                  alt="MSW Locação de Máquinas e Equipamentos" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
