import React, { useEffect } from 'react';
import { X, Star, MapPin, Clock, CoffeeIcon, ExternalLink } from 'lucide-react';
import { CoffeeShop, coffeeShopTypeLabels } from '../../types';

interface CoffeeShopModalProps {
  coffeeShop: CoffeeShop;
  onClose: () => void;
}

const CoffeeShopModal: React.FC<CoffeeShopModalProps> = ({ coffeeShop, onClose }) => {
  const { name, description, type, rating, image, address, hours, menu, location } = coffeeShop;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <Star className="absolute w-5 h-5 text-amber-500" />
            <div className="absolute w-2.5 h-5 overflow-hidden">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} className="w-5 h-5 text-amber-500" />
        );
      }
    }
    return stars;
  };

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`, '_blank');
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col animate-fadeIn"
        onClick={stopPropagation}
      >
        {/* Header with image */}
        <div className="relative h-64 md:h-72">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="flex items-center mt-1">
              {renderRating()}
              <span className="ml-2">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Types */}
          <div className="flex flex-wrap gap-2 mb-4">
            {type.map((t) => (
              <span 
                key={t} 
                className="text-sm px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-medium dark:bg-amber-900 dark:text-amber-200"
              >
                {coffeeShopTypeLabels[t]}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <p className="text-gray-700 mb-6 dark:text-gray-300">{description}</p>
          
          {/* Info panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 p-4 rounded-lg dark:bg-amber-900/20">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-600 mt-1 shrink-0 dark:text-amber-500" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Dirección</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">{address}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg dark:bg-amber-900/20">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-amber-600 mt-1 shrink-0 dark:text-amber-500" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Horario</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">{hours}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Menu */}
          {menu && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center dark:text-white">
                <CoffeeIcon className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-500" />
                Menú destacado
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{menu}</p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={openGoogleMaps}
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

export default CoffeeShopModal;