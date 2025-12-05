import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Equipamentos modernos e constantemente revisados',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados para melhor atendê-lo',
    },
    {
      icon: Clock,
      title: 'Disponibilidade Total',
      description: 'Atendimento ágil e suporte quando você precisar',
    },
    {
      icon: Shield,
      title: 'Segurança em Primeiro Lugar',
      description: 'Todas as normas de segurança são rigorosamente seguidas',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Sobre a <span className="text-green-600">MSW</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            A MSW Locação de Veículos e Equipamentos é referência no mercado de locação
            de máquinas para construção civil. Com anos de experiência, oferecemos
            soluções completas para obras de todos os portes, sempre com foco em
            qualidade, eficiência e satisfação do cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <Icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4 text-center">Por que escolher a MSW?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
            Somos especializados em locação de caminhões munk com guindaste hidráulico.
            Com profissionais qualificados, equipamentos bem mantidos e atendimento
            personalizado, garantimos as melhores soluções para sua obra.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">Munk</div>
              <div className="text-green-100">Especialidade</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Qualidade</div>
              <div className="text-green-100">Garantida</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Confiável</div>
              <div className="text-green-100">Desde 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
