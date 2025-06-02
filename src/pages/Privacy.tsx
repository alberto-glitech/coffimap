import React from 'react';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 dark:bg-amber-900/30">
            <Shield className="w-6 h-6 text-amber-700 dark:text-amber-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Política de Privacidad</h1>
        </div>

        <div className="prose prose-amber max-w-none dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            1. Información que Recopilamos
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            En COFFIMAP CHOLULA, nos comprometemos a proteger tu privacidad. Recopilamos la siguiente información:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Información de ubicación cuando utilizas el mapa</li>
            <li>Preferencias de búsqueda y filtros</li>
            <li>Datos de uso anónimos para mejorar nuestro servicio</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            2. Uso de la Información
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Mostrar cafeterías cercanas a tu ubicación</li>
            <li>Mejorar la experiencia de usuario</li>
            <li>Proporcionar recomendaciones personalizadas</li>
            <li>Analizar tendencias de uso</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            3. Cookies y Tecnologías Similares
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestra plataforma.
            Estas nos ayudan a:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Recordar tus preferencias</li>
            <li>Mantener tu sesión activa</li>
            <li>Analizar el uso de la plataforma</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            4. Compartir Información
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            No compartimos tu información personal con terceros, excepto cuando:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Sea necesario para proporcionar el servicio</li>
            <li>Tengamos tu consentimiento explícito</li>
            <li>Sea requerido por ley</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            5. Tus Derechos
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tienes derecho a:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Acceder a tu información personal</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerte al procesamiento de tus datos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;