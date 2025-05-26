import React from 'react';
import MapView from '../components/map/MapView';
import CoffeeShopModal from '../components/coffee-shops/CoffeeShopModal';
import { useCoffeeShops } from '../context/CoffeeShopsContext';
import { Map as MapIcon } from 'lucide-react';

const Map: React.FC = () => {
  const { selectedCoffeeShop, selectCoffeeShop } = useCoffeeShops();

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3 dark:text-white">Mapa de cafeterías</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explora el mapa para encontrar cafeterías cercanas en San Pedro Cholula. Haz clic en los marcadores para obtener más información.
        </p>
      </div>
      
      <div className="mb-8">
        <MapView />
      </div>
      
      <div className="bg-amber-50 rounded-lg p-6 shadow-sm dark:bg-gray-800/50">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 shrink-0 dark:bg-amber-900/30">
            <MapIcon className="w-5 h-5 text-amber-700 dark:text-amber-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">Cómo usar el mapa</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Haz clic en los íconos de taza de café para ver información básica sobre cada cafetería. 
              Luego, puedes hacer clic en "Ver detalles" para obtener toda la información, o utilizar
              el botón de navegación para obtener indicaciones hasta la ubicación.
            </p>
          </div>
        </div>
      </div>
      
      {selectedCoffeeShop && (
        <CoffeeShopModal 
          coffeeShop={selectedCoffeeShop} 
          onClose={() => selectCoffeeShop(null)} 
        />
      )}
    </div>
  );
};

export default Map;