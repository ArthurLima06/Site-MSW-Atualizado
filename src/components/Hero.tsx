import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";
import constructionHero from "@/assets/construction-hero.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={constructionHero} 
          alt="Obra de construção" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium animate-fade-in">
              <Shield className="w-4 h-4" />
              Empresa confiável
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight animate-fade-in animation-delay-200">
              Locação de{" "}
              <span className="text-primary">Máquinas</span> e{" "}
              <span className="text-primary">Equipamentos</span> para Construção
            </h1>
            
            <p className="text-lg md:text-xl text-background/80 max-w-xl animate-fade-in animation-delay-400 text-justify">
              Soluções completas em locação de equipamentos para sua obra. Qualidade,
              segurança e pontualidade em cada entrega.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-3">
                  <Phone className="w-5 h-5" />
                  Solicitar Orçamento
                </Button>
              </a>
              <a href="#equipamentos">
                <Button variant="outline" size="xl" className="w-full sm:w-auto gap-3 border-background/30 text-background hover:bg-background/10">
                  Ver Equipamentos
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8 animate-fade-in animation-delay-600">
              <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-background">Entrega Rápida</p>
                  <p className="text-sm text-background/70">No prazo combinado</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-background">Qualidade</p>
                  <p className="text-sm text-background/70">Equipamentos revisados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Floating Stats Cards */}
              <div className="absolute bottom-20 left-10 bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border animate-float animation-delay-400">
                <p className="text-4xl font-bold text-primary">5+</p>
                <p className="text-muted-foreground">Anos de Experiência</p>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border animate-float animation-delay-200">
                <p className="text-5xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground text-center">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--muted))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
