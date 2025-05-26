import React, { useEffect } from 'react';
import { X, Star, MapPin, Clock, Coffee as IconoCafe, ExternalLink } from 'lucide-react';
import { Cafeteria, etiquetasTipoCafeteria } from '../../tipos';

interface PropsModalCafeteria {
  cafeteria: Cafeteria;
  onClose: () => void;
}

const ModalCafeteria: React.FC<PropsModalCafeteria> = ({ cafeteria, onClose }) => {
  const { nombre, descripcion, tipo, calificacion, imagen, direccion, horario, menu, ubicacion } = cafeteria;

  useEffect(() => {
    const manejarEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', manejarEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', manejarEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const renderizarCalificacion = () => {
    const estrellas = [];
    const estrellasCompletas = Math.floor(calificacion);
    const tieneMediaEstrella = calificacion % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= estrellasCompletas) {
        estrellas.push(
          <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
        );
      } else if (i === estrellasCompletas + 1 && tieneMediaEstrella) {
        estrellas.push(
          <div key={i} className="relative w-5 h-5">
            <Star className="absolute w-5 h-5 text-amber-500" />
            <div className="absolute w-2.5 h-5 overflow-hidden">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
          </div>
        );
      } else {
        estrellas.push(
          <Star key={i} className="w-5 h-5 text-amber-500" />
        );
      }
    }
    return estrellas;
  };

  const abrirGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${ubicacion.lat},${ubicacion.lng}`, '_blank');
  };

  const detenerPropagacion = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col animate-fadeIn"
        onClick={detenerPropagacion}
      >
        {/* Cabecera con imagen */}
        <div className="relative h-64 md:h-72">
          <img 
            src={imagen} 
            alt={nombre} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h2 className="text-2xl font-bold">{nombre}</h2>
            <div className="flex items-center mt-1">
              {renderizarCalificacion()}
              <span className="ml-2">{calificacion.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Tipos */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tipo.map((t) => (
              <span 
                key={t} 
                className="text-sm px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-medium dark:bg-amber-900 dark:text-amber-200"
              >
                {etiquetasTipoCafeteria[t]}
              </span>
            ))}
          </div>
          
          {/* Descripción */}
          <p className="text-gray-700 mb-6 dark:text-gray-300">{descripcion}</p>
          
          {/* Paneles de información */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 p-4 rounded-lg dark:bg-amber-900/20">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-600 mt-1 shrink-0 dark:text-amber-500" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Dirección</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">{direccion}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg dark:bg-amber-900/20">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-amber-600 mt-1 shrink-0 dark:text-amber-500" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Horario</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">{horario}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Menú */}
          {menu && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center dark:text-white">
                <IconoCafe className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-500" />
                Menú destacado
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{menu}</p>
            </div>
          )}
        </div>
        
        {/* Pie */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={abrirGoogleMaps}
            className="w-full py-3 bg-amber-600 text-white rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 dark:bg-amber-700 dark:hover:bg-amber-600"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Ver en Google Maps
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCafeteria;