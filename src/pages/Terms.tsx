import React from 'react';
import { ScrollText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 dark:bg-amber-900/30">
            <ScrollText className="w-6 h-6 text-amber-700 dark:text-amber-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Términos y Condiciones</h1>
        </div>

        <div className="prose prose-amber max-w-none dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            1. Aceptación de los Términos
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Al acceder y utilizar COFFIMAP CHOLULA, aceptas estos términos y condiciones en su totalidad.
            Si no estás de acuerdo con alguna parte de estos términos, te pedimos que no utilices nuestra plataforma.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            2. Uso del Servicio
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Nuestro servicio está diseñado para:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Proporcionar información sobre cafeterías en San Pedro Cholula</li>
            <li>Facilitar la búsqueda de establecimientos</li>
            <li>Ofrecer reseñas y calificaciones de usuarios</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            3. Contenido y Propiedad Intelectual
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Todo el contenido presente en COFFIMAP CHOLULA está protegido por derechos de autor.
            Los usuarios se comprometen a:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>No copiar o distribuir el contenido sin autorización</li>
            <li>Respetar las marcas registradas y logotipos</li>
            <li>No modificar o alterar el contenido de la plataforma</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            4. Responsabilidad
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            COFFIMAP CHOLULA no se hace responsable de:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Cambios en los horarios o servicios de las cafeterías</li>
            <li>Experiencias individuales en los establecimientos</li>
            <li>Pérdidas o daños derivados del uso de la plataforma</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            5. Modificaciones
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Nos reservamos el derecho de modificar estos términos en cualquier momento.
            Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            6. Ley Aplicable
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta
            en los tribunales competentes de Puebla, México.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;