import { Leaf, Recycle } from 'lucide-react';

const Environment = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construção Sustentável"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <Leaf className="text-white" size={28} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Compromisso com o <span className="text-green-600">Meio Ambiente</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              Na MSW, acreditamos que é possível desenvolver grandes obras sem comprometer
              o meio ambiente. Por isso, investimos em equipamentos modernos com menor
              emissão de poluentes e tecnologias que minimizam o impacto ambiental.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
              Trabalhamos com práticas sustentáveis em todas as etapas, desde a escolha
              dos equipamentos até a orientação aos nossos clientes sobre as melhores
              práticas ambientais durante a execução de suas obras.
            </p>
            <div className="flex items-start space-x-4 bg-green-50 p-6 rounded-2xl">
              <Recycle className="text-green-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nossas Iniciativas Sustentáveis
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1 flex-shrink-0" />
                    <span className="text-justify">Equipamentos com tecnologia de redução de emissões</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1 flex-shrink-0" />
                    <span className="text-justify">Programa de manutenção preventiva para eficiência energética</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1 flex-shrink-0" />
                    <span className="text-justify">Orientação sobre descarte correto de resíduos de obra</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1 flex-shrink-0" />
                    <span className="text-justify">Parceria com fornecedores comprometidos com a sustentabilidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Qualidade e <span className="text-green-600">Segurança</span> na Sua Obra
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              Uma boa obra vai além dos resultados visíveis. É fundamental seguir todas as
              normas de segurança, respeitar o meio ambiente e garantir a qualidade em
              cada etapa do processo.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
              Com a MSW, você tem a certeza de que está trabalhando com equipamentos que
              atendem aos mais rigorosos padrões de qualidade e segurança, contribuindo
              para uma obra responsável e bem-sucedida.
            </p>
            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4">Nossa Garantia</h4>
              <p className="text-gray-300 leading-relaxed text-justify">
                Todos os nossos equipamentos passam por inspeções rigorosas e são
                certificados para operação segura. Sua tranquilidade é nossa prioridade.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Obra Segura"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
