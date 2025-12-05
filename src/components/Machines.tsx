import { MessageCircle } from 'lucide-react';

const Machines = () => {
  const machines = [
    {
      name: 'Caminhão Munk',
      image: '/download (5).jpeg',
      description: 'Caminhão com guindaste hidráulico para levantamento e movimentação de cargas pesadas. Ideal para posicionamento de estruturas e equipamentos em diversos tipos de obra.',
      features: ['Guindaste hidráulico', 'Capacidade de carga elevada', 'Precisão no posicionamento'],
    },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!', '_blank');
  };

  return (
    <section id="maquinas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Nossos <span className="text-green-600">Equipamentos</span>
          </h2>
          <p className="text-lg text-gray-600">
            Conheça nossa frota completa de máquinas modernas e bem mantidas, prontas
            para atender sua obra com máxima eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {machine.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-justify">{machine.description}</p>
                <ul className="space-y-2 mb-6">
                  {machine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1 flex-shrink-0" />
                      <span className="text-justify">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-black to-gray-900 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-center">Mais Opções em Breve</h3>
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              Estamos constantemente expandindo nossa frota com novos equipamentos e soluções.
              Em breve, teremos mais opções de máquinas disponíveis para atender suas necessidades
              específicas. Entre em contato conosco para conhecer nossas soluções personalizadas
              e futuras disponibilidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Machines;
