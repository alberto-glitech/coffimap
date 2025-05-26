import React from 'react';
import { Coffee, MapPin, Search, Filter } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Coffee className="w-6 h-6 text-amber-600 dark:text-amber-500" />,
      title: 'Variedad de cafeterías',
      description: 'Descubre cafeterías tradicionales, modernas, espacios de trabajo y mucho más.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-500" />,
      title: 'Ubicaciones en el mapa',
      description: 'Encuentra fácilmente la ubicación exacta de cada cafetería en San Pedro Cholula.'
    },
    {
      icon: <Search className="w-6 h-6 text-amber-600 dark:text-amber-500" />,
      title: 'Búsqueda inteligente',
      description: 'Usa el buscador para encontrar rápidamente la cafetería que estás buscando.'
    },
    {
      icon: <Filter className="w-6 h-6 text-amber-600 dark:text-amber-500" />,
      title: 'Filtros personalizados',
      description: 'Filtra por tipo de cafetería para encontrar exactamente lo que necesitas.'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Sobre COFFIMAP CHOLULA</h2>
          <p className="text-gray-600 dark:text-gray-300">
            COFFIMAP CHOLULA es tu guía perfecta para explorar la vibrante escena cafetera de San Pedro Cholula. 
            Ya sea que busques un lugar tranquilo para trabajar, un café gourmet o un espacio con terraza, 
            te ayudamos a encontrar el lugar perfecto para tu momento café.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-amber-50 rounded-xl p-6 shadow-sm dark:bg-gray-800 transform transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 dark:bg-amber-900/30">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white shadow-xl dark:from-amber-700 dark:to-amber-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-lg">
              <h3 className="text-2xl font-bold mb-3">¿Eres dueño de una cafetería?</h3>
              <p className="text-amber-100">
                Si tienes una cafetería en San Pedro Cholula y quieres aparecer en nuestra plataforma, 
                contáctanos. Nos encantaría incluir tu negocio en nuestra guía.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50 transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;