import React from 'react';
import { Coffee, Map, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center relative">
      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-amber-200 opacity-20 dark:opacity-10"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-amber-300 opacity-10 dark:opacity-5"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-amber-100 opacity-30 dark:opacity-5"></div>
      </div>
      
      {/* Coffee cup decoration */}
      <div className="absolute top-1/4 right-10 md:right-20 hidden md:block z-0 animate-float">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-16 h-8 border-t-4 border-l-4 border-r-4 border-amber-800 rounded-t-full"></div>
          <div className="absolute top-8 left-2 w-12 h-12 bg-amber-600 rounded-b-lg"></div>
          <div className="absolute top-6 right-0 w-8 h-6 border-t-2 border-r-2 border-b-2 border-amber-800 rounded-r-lg"></div>
          <div className="absolute top-10 left-6 w-4 h-4 bg-amber-300 rounded-full opacity-50 animate-pulse"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 mb-6 dark:bg-amber-900/30 dark:text-amber-300">
            <Coffee className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Descubre el café en Cholula</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight dark:text-white">
            Tu guía para encontrar el 
            <span className="text-amber-700 dark:text-amber-500"> café perfecto </span> 
            en San Pedro Cholula
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 md:pr-12 dark:text-gray-300">
            Explora las mejores cafeterías de la ciudad, desde espacios tradicionales hasta modernas propuestas. Encuentra tu lugar ideal para disfrutar de un buen café mientras visitas esta hermosa ciudad.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onExploreClick}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg flex items-center hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 shadow-lg dark:bg-amber-700 dark:hover:bg-amber-600"
            >
              Explorar cafeterías
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button className="px-6 py-3 bg-white text-amber-700 border border-amber-200 rounded-lg flex items-center hover:bg-amber-50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 shadow-lg dark:bg-gray-800 dark:text-amber-400 dark:border-gray-700 dark:hover:bg-gray-700">
              <Map className="w-5 h-5 mr-2" />
              Ver en el mapa
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated coffee beans */}
      <div className="absolute bottom-10 left-1/4 w-6 h-8 rounded-full bg-amber-900 rotate-45 opacity-20 dark:opacity-10 animate-float"></div>
      <div className="absolute top-1/3 left-1/5 w-4 h-6 rounded-full bg-amber-800 rotate-12 opacity-10 dark:opacity-5 animate-float-slow"></div>
      <div className="absolute top-1/4 right-1/3 w-5 h-7 rounded-full bg-amber-800 -rotate-12 opacity-15 dark:opacity-5 animate-float-slow"></div>
    </div>
  );
};

export default Hero;