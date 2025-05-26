import React, { useState, useEffect } from 'react';
import { useCoffeeShops } from '../../context/CoffeeShopsContext';
import { CoffeeShop } from '../../types';
import { Coffee, Star, Info } from 'lucide-react';

const MapView: React.FC = () => {
  const { coffeeShops, filteredCoffeeShops, selectedCoffeeShop, selectCoffeeShop } = useCoffeeShops();
  const [activeShop, setActiveShop] = useState<CoffeeShop | null>(null);
  const [isMapLoading, setIsMapLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsMapLoading(false);
    }, 1500);
  }, []);

  // This would be replaced with actual Google Maps integration in a production app
  const mapInteractionHandler = (shop: CoffeeShop) => {
    setActiveShop(shop);
  };

  const openFullDetails = (shop: CoffeeShop) => {
    selectCoffeeShop(shop);
    setActiveShop(null);
  };

  const renderShopMarkers = () => {
    return filteredCoffeeShops.map((shop) => (
      <div 
        key={shop.id}
        className={`absolute cursor-pointer transition-all duration-300 transform ${
          activeShop?.id === shop.id ? 'scale-125 z-10' : 'hover:scale-110'
        }`}
        style={{
          left: `${((shop.location.lng + 98.31) * 100) - 12}%`, 
          top: `${100 - ((shop.location.lat - 19.05) * 500) - 12}%`
        }}
        onClick={() => mapInteractionHandler(shop)}
      >
        <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-md dark:bg-amber-700">
          <Coffee className="w-4 h-4" />
        </div>
        
        {activeShop?.id === shop.id && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-lg p-3 dark:bg-gray-800 z-20 animate-fadeIn">
            <div className="text-sm font-semibold text-gray-900 mb-1 dark:text-white">{shop.name}</div>
            <div className="flex items-center mb-2">
              {Array.from({ length: Math.floor(shop.rating) }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
              ))}
              {shop.rating % 1 >= 0.5 && (
                <div className="relative w-3 h-3">
                  <Star className="absolute w-3 h-3 text-amber-500" />
                  <div className="absolute w-1.5 h-3 overflow-hidden">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  </div>
                </div>
              )}
              <span className="text-xs text-gray-600 ml-1 dark:text-gray-300">{shop.rating.toFixed(1)}</span>
            </div>
            <button 
              onClick={() => openFullDetails(shop)}
              className="w-full py-1 text-xs bg-amber-600 text-white rounded flex items-center justify-center hover:bg-amber-700 transition-colors dark:bg-amber-700 dark:hover:bg-amber-600"
            >
              <Info className="w-3 h-3 mr-1" />
              Ver detalles
            </button>
            {/* Triangle pointer */}
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 dark:bg-gray-800"></div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="relative w-full h-[70vh] bg-amber-50 rounded-lg overflow-hidden shadow-md dark:bg-gray-800">
      {isMapLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-amber-50 dark:bg-gray-800">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-amber-800 dark:text-amber-300">Cargando mapa...</p>
          </div>
        </div>
      ) : (
        <>
          {/* This would be replaced with an actual Google Maps component */}
          <div className="absolute inset-0 bg-amber-100 dark:bg-gray-700">
            {/* Map simulation background */}
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1307968/pexels-photo-1307968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover opacity-60 dark:opacity-30"></div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-amber-200/30 dark:border-gray-600/30"></div>
              ))}
            </div>
            
            {/* Main roads */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-amber-300/50 dark:bg-amber-600/50 transform -translate-y-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-amber-300/50 dark:bg-amber-600/50 transform -translate-x-1/2"></div>
            
            {/* Secondary roads */}
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-amber-300/30 dark:bg-amber-600/30 transform -translate-y-1/2"></div>
            <div className="absolute top-3/4 left-0 right-0 h-1 bg-amber-300/30 dark:bg-amber-600/30 transform -translate-y-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-amber-300/30 dark:bg-amber-600/30 transform -translate-x-1/2"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-amber-300/30 dark:bg-amber-600/30 transform -translate-x-1/2"></div>
            
            {/* City center indicator */}
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-amber-400/20 dark:bg-amber-700/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="text-xs font-semibold text-amber-800 dark:text-amber-300 text-center">
                Centro<br/>Cholula
              </div>
            </div>
            
            {/* Shop markers */}
            {renderShopMarkers()}
          </div>
          
          {/* Map controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              <span>+</span>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              <span>−</span>
            </button>
          </div>
          
          {/* Map legend */}
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
            <div className="text-sm font-semibold mb-2">Leyenda</div>
            <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
              <div className="w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center mr-2 dark:bg-amber-700">
                <Coffee className="w-3 h-3 text-white" />
              </div>
              <span>Cafetería</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MapView;