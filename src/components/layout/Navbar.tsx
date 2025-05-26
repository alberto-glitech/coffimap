import React, { useState, useEffect } from 'react';
import { Coffee, Search, Menu, X } from 'lucide-react';
import { useCoffeeShops } from '../../context/CoffeeShopsContext';
import { coffeeShopTypeLabels, CoffeeShopType } from '../../types';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const { searchTerm, setSearchTerm, toggleFilter, activeFilters, clearFilters } = useCoffeeShops();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'cafeterias', label: 'Cafeterías' },
    { id: 'mapa', label: 'Mapa' }
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (pageId: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => handleNavigation('inicio')}
          >
            <Coffee className="h-8 w-8 text-amber-700 dark:text-amber-500" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">COFFIMAP CHOLULA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors hover:text-amber-700 dark:hover:text-amber-500 ${
                  activePage === item.id 
                    ? 'text-amber-700 dark:text-amber-500' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar cafeterías..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-amber-600 w-64"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            
            {/* Filter Button */}
            <button 
              className="ml-2 p-2 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-800 transition-colors"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              Filtros {activeFilters.length > 0 && `(${activeFilters.length})`}
            </button>
            
            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute right-0 mt-12 w-64 bg-white rounded-lg shadow-lg p-4 z-20 dark:bg-gray-800 dark:text-white">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Filtrar por tipo</h3>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-amber-700 hover:underline dark:text-amber-500"
                  >
                    Limpiar filtros
                  </button>
                </div>
                <div className="space-y-2">
                  {Object.entries(coffeeShopTypeLabels).map(([type, label]) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`filter-${type}`}
                        checked={activeFilters.includes(type as CoffeeShopType)}
                        onChange={() => toggleFilter(type as CoffeeShopType)}
                        className="h-4 w-4 text-amber-600 rounded border-gray-300 focus:ring-amber-500 dark:border-gray-600"
                      />
                      <label htmlFor={`filter-${type}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-amber-700 hover:bg-amber-100 dark:text-gray-300 dark:hover:text-amber-500 dark:hover:bg-gray-800"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="container mx-auto px-4 py-3">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-4 mb-4">
              {navItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${
                    activePage === item.id 
                      ? 'bg-amber-100 text-amber-700 dark:bg-gray-800 dark:text-amber-500' 
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar cafeterías..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Mobile Filters */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-800 dark:text-white">Filtrar por tipo</h3>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-amber-700 hover:underline dark:text-amber-500"
                >
                  Limpiar filtros
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(coffeeShopTypeLabels).map(([type, label]) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`mobile-filter-${type}`}
                      checked={activeFilters.includes(type as CoffeeShopType)}
                      onChange={() => toggleFilter(type as CoffeeShopType)}
                      className="h-4 w-4 text-amber-600 rounded border-gray-300 focus:ring-amber-500 dark:border-gray-600"
                    />
                    <label htmlFor={`mobile-filter-${type}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close filter dropdown */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;