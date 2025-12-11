import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, TrendingUp } from "lucide-react";
import munckTruck from "@/assets/munck-truck-new.jpg";
import constructionSite2 from "@/assets/construction-site-2.jpg";
import loaderJcb from "@/assets/loader-jcb.jpg";

const Equipment = () => {
  const whatsappLink = "https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!";

  return (
    <section id="equipamentos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            Nossos Equipamentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 section-title mx-auto">
            Equipamentos Disponíveis
          </h2>
          <p className="text-lg text-muted-foreground">
            Equipamentos modernos e revisados, prontos para atender qualquer demanda
            da sua construção com segurança e eficiência.
          </p>
        </div>

        {/* Main Equipment - Caminhão Munck */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="equipment-card bg-card overflow-hidden shadow-xl hover:shadow-2xl group">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={munckTruck} 
                  alt="Caminhão Munck" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Disponível
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Caminhão Munck
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                  Perfeito para carga, descarga e transporte de materiais pesados com precisão. 
                  Ideal para obras que necessitam de içamento e movimentação de cargas de grande porte.
                </p>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Capacidade de carga elevada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Operação precisa e segura
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Entrega rápida na sua obra
                  </li>
                </ul>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="w-full gap-3">
                    <Phone className="w-5 h-5" />
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Expansion Message */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 text-center mb-16 border border-primary/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Empresa em Expansão
            </h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Estamos crescendo! Em breve teremos mais máquinas e equipamentos disponíveis para locação, 
            incluindo retroescavadeiras, escavadeiras hidráulicas, rolos compactadores e muito mais.
          </p>
          <p className="text-primary font-semibold">
            Fique ligado nas novidades!
          </p>
        </div>

        {/* Construction Images Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
            <img 
              src={constructionSite2} 
              alt="Obra de construção" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-background font-semibold text-lg">Obras Atendidas</p>
              <p className="text-background/80">Qualidade em cada projeto</p>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
            <img 
              src={loaderJcb} 
              alt="Equipamento moderno" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-background font-semibold text-lg">Equipamentos Modernos</p>
              <p className="text-background/80">Máquinas sempre revisadas</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Precisa de um equipamento específico? Entre em contato conosco!
          </p>
          <a href="https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="gap-3">
              <Phone className="w-5 h-5" />
              Fale com um Consultor
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
