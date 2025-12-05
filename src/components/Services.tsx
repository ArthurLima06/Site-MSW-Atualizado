import { Truck, Wrench, Headphones, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Locação de Caminhão Munk',
      description:
        'Serviço completo de aluguel de caminhão munk com guindaste hidráulico. Ideal para movimentação de cargas pesadas e posicionamento de estruturas em obras.',
      features: ['Guindaste hidráulico', 'Operador experiente', 'Segurança garantida', 'Flexibilidade de horários'],
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      description:
        'Todos os nossos equipamentos passam por rigorosa manutenção preventiva antes de cada locação, garantindo máximo desempenho.',
      features: ['Inspeções rigorosas', 'Certificado de segurança', 'Peças originais', 'Revisão completa'],
    },
    {
      icon: Headphones,
      title: 'Suporte Especializado',
      description:
        'Equipe técnica disponível para orientações durante toda a locação, garantindo o melhor aproveitamento do equipamento.',
      features: ['Atendimento personalizado', 'Consultoria técnica', 'Soluções rápidas', 'Suporte contínuo'],
    },
    {
      icon: FileCheck,
      title: 'Assessoria em Projetos',
      description:
        'Ajudamos você a avaliar a necessidade de equipamentos para sua obra e oferecemos as melhores soluções de locação.',
      features: ['Análise gratuita', 'Orçamento transparente', 'Melhor custo-benefício', 'Pacotes personalizados'],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Nossos <span className="text-green-600">Serviços</span>
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos soluções completas para sua obra, desde a locação até o suporte
            técnico especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-600 group"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-left">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1 flex-shrink-0" />
                      <span className="text-justify">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-300 font-medium text-lg inline-flex items-center"
          >
            Solicite um Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
