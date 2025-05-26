import React from 'react';
import { CoffeeShop } from '../../types';
import { useCoffeeShops } from '../../context/CoffeeShopsContext';
import { Star, ArrowRight } from 'lucide-react';

interface FeaturedCoffeeShopsProps {
  onViewAllClick: () => void;
}

const FeaturedCoffeeShops: React.FC<FeaturedCoffeeShopsProps> = ({ onViewAllClick }) => {
  const { coffeeShops, selectCoffeeShop } = useCoffeeShops();
  
  // Get top 3 rated coffee shops
  const featuredShops = [...coffeeShops]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
    
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-amber-500" />
            <div className="absolute w-2 h-4 overflow-hidden">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-amber-500" />
        );
      }
    }
    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">{rating.toFixed(1)}</span>
      </div>
    );
  };
    
  return (
    <section className="py-16 bg-amber-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Cafeterías destacadas</h2>
            <p className="text-gray-600 max-w-2xl dark:text-gray-400">
              Descubre los lugares preferidos por los visitantes, con la mejor calificación y experiencia única.
            </p>
          </div>
          <button 
            onClick={onViewAllClick}
            className="mt-4 md:mt-0 text-amber-700 hover:text-amber-600 font-medium flex items-center dark:text-amber-500 dark:hover:text-amber-400"
          >
            Ver todas
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredShops.map((shop) => (
            <div 
              key={shop.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] dark:bg-gray-800 cursor-pointer"
              onClick={() => selectCoffeeShop(shop)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={shop.image} 
                  alt={shop.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">{shop.name}</h3>
                {renderRating(shop.rating)}
                <p className="mt-3 text-gray-600 line-clamp-2 dark:text-gray-300">{shop.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoffeeShops;