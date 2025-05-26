import React from 'react';
import CoffeeShopCard from './CoffeeShopCard';
import { CoffeeShop } from '../../types';
import { useCoffeeShops } from '../../context/CoffeeShopsContext';

const CoffeeShopGrid: React.FC = () => {
  const { filteredCoffeeShops, selectCoffeeShop } = useCoffeeShops();

  if (filteredCoffeeShops.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center dark:bg-amber-900/30">
          <span className="text-2xl">☕</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-white">No se encontraron cafeterías</h3>
        <p className="text-gray-600 max-w-md mx-auto dark:text-gray-400">
          No hemos encontrado cafeterías que coincidan con tus criterios de búsqueda. Intenta cambiar los filtros o el término de búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCoffeeShops.map((coffeeShop) => (
        <CoffeeShopCard
          key={coffeeShop.id}
          coffeeShop={coffeeShop}
          onClick={() => selectCoffeeShop(coffeeShop)}
        />
      ))}
    </div>
  );
};

export default CoffeeShopGrid;