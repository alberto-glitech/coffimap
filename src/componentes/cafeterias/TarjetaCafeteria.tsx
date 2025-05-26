import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Cafeteria, etiquetasTipoCafeteria } from '../../tipos';

interface PropsTarjetaCafeteria {
  cafeteria: Cafeteria;
  onClick: () => void;
}

const TarjetaCafeteria: React.FC<PropsTarjetaCafeteria> = ({ cafeteria, onClick }) => {
  const { nombre, descripcionCorta, tipo, calificacion, imagen } = cafeteria;

  const renderizarCalificacion = () => {
    const estrellas = [];
    const estrellasCompletas = Math.floor(calificacion);
    const tieneMediaEstrella = calificacion % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= estrellasCompletas) {
        estrellas.push(
          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
        );
      } else if (i === estrellasCompletas + 1 && tieneMediaEstrella) {
        estrellas.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-amber-500" />
            <div className="absolute w-2 h-4 overflow-hidden">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
          </div>
        );
      } else {
        estrellas.push(
          <Star key={i} className="w-4 h-4 text-amber-500" />
        );
      }
    }
    return estrellas;
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 cursor-pointer transform hover:scale-[1.02] transition-transform"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imagen} 
          alt={nombre} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 left-0 p-2 flex gap-1 flex-wrap">
          {tipo.slice(0, 2).map((t) => (
            <span 
              key={t} 
              className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-medium dark:bg-amber-900 dark:text-amber-200"
            >
              {etiquetasTipoCafeteria[t]}
            </span>
          ))}
          {tipo.length > 2 && (
            <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-medium dark:bg-amber-900 dark:text-amber-200">
              +{tipo.length - 2}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1 dark:text-white">{nombre}</h3>
        
        <div className="flex items-center text-amber-500 mb-2">
          {renderizarCalificacion()}
          <span className="text-sm text-gray-600 ml-1 dark:text-gray-300">{calificacion.toFixed(1)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 dark:text-gray-300">{descripcionCorta}</p>
        
        <button 
          className="w-full py-2 px-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 dark:bg-amber-700 dark:hover:bg-amber-600"
        >
          Saber más
        </button>
      </div>
    </div>
  );
};

export default TarjetaCafeteria;