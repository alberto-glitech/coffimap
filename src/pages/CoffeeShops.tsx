import React from 'react';
import CoffeeShopGrid from '../components/coffee-shops/CoffeeShopGrid';
import CoffeeShopModal from '../components/coffee-shops/CoffeeShopModal';
import { useCoffeeShops } from '../context/CoffeeShopsContext';
import { Coffee } from 'lucide-react';

const CoffeeShops: React.FC = () => {
  const { selectedCoffeeShop, selectCoffeeShop, filteredCoffeeShops, searchTerm, activeFilters } = useCoffeeShops();

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3 dark:text-white">Descubre las cafeterías de Cholula</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explora nuestra selección de cafeterías en San Pedro Cholula y encuentra tu lugar perfecto para disfrutar un buen café.
        </p>
      </div>
      
      {/* Results summary */}
      <div className="mb-8 flex items-center justify-between flex-wrap">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3 dark:bg-amber-900/30">
            <Coffee className="w-5 h-5 text-amber-700 dark:text-amber-500" />
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Mostrando</span>
            <span className="font-semibold text-gray-900 dark:text-white ml-1">{filteredCoffeeShops.length} resultados</span>
            {(searchTerm || activeFilters.length > 0) && (
              <span className="text-gray-600 dark:text-gray-400 ml-1">
                {searchTerm && `para "${searchTerm}"`}
                {activeFilters.length > 0 && searchTerm && " y "}
                {activeFilters.length > 0 && `${activeFilters.length} filtros`}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <CoffeeShopGrid />
      
      {selectedCoffeeShop && (
        <CoffeeShopModal 
          coffeeShop={selectedCoffeeShop} 
          onClose={() => selectCoffeeShop(null)} 
        />
      )}
    </div>
  );
};

export default CoffeeShops;