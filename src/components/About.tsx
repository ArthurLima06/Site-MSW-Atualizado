import { CheckCircle, Users, Truck, Shield, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança Garantida",
      description: "Todos os equipamentos passam por rigorosa manutenção preventiva.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Entrega Pontual",
      description: "Compromisso com prazos e logística eficiente em toda região.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Suporte Especializado",
      description: "Equipe técnica disponível para auxiliar em qualquer necessidade.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Qualidade Premium",
      description: "Equipamentos de primeira linha das melhores marcas do mercado.",
    },
  ];

  const benefits = [
    "Frota moderna e diversificada",
    "Manutenção preventiva constante",
    "Operadores treinados disponíveis",
    "Atendimento personalizado",
    "Preços competitivos",
    "Flexibilidade nos contratos",
  ];

  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Sobre a MSW
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 section-title">
                Excelência em Locação de Equipamentos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                A <strong className="text-foreground">MSW Locação de Máquinas e Equipamentos</strong> é uma empresa 
                especializada em fornecer soluções completas para o setor de construção civil. 
                Com mais de uma década de experiência, nos destacamos pela qualidade dos nossos 
                equipamentos e pelo atendimento personalizado aos nossos clientes.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">5+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d bg-card p-6 rounded-2xl shadow-md border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
