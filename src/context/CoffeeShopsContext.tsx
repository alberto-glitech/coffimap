import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CoffeeShop, CoffeeShopType } from '../types';
import { coffeeShops as initialCoffeeShops } from '../data/coffeeShops';

interface CoffeeShopsContextType {
  coffeeShops: CoffeeShop[];
  filteredCoffeeShops: CoffeeShop[];
  searchTerm: string;
  activeFilters: CoffeeShopType[];
  selectedCoffeeShop: CoffeeShop | null;
  setSearchTerm: (term: string) => void;
  toggleFilter: (filter: CoffeeShopType) => void;
  clearFilters: () => void;
  selectCoffeeShop: (shop: CoffeeShop | null) => void;
}

const CoffeeShopsContext = createContext<CoffeeShopsContextType | undefined>(undefined);

export const CoffeeShopsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [coffeeShops] = useState<CoffeeShop[]>(initialCoffeeShops);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<CoffeeShopType[]>([]);
  const [selectedCoffeeShop, setSelectedCoffeeShop] = useState<CoffeeShop | null>(null);

  const toggleFilter = (filter: CoffeeShopType) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const selectCoffeeShop = (shop: CoffeeShop | null) => {
    setSelectedCoffeeShop(shop);
  };

  // Apply filters and search
  const filteredCoffeeShops = coffeeShops.filter(shop => {
    // Filter by search term
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         shop.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by shop type
    const matchesFilter = activeFilters.length === 0 || 
                         shop.type.some(type => activeFilters.includes(type));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <CoffeeShopsContext.Provider 
      value={{ 
        coffeeShops,
        filteredCoffeeShops,
        searchTerm,
        activeFilters,
        selectedCoffeeShop,
        setSearchTerm,
        toggleFilter,
        clearFilters,
        selectCoffeeShop
      }}
    >
      {children}
    </CoffeeShopsContext.Provider>
  );
};

export const useCoffeeShops = () => {
  const context = useContext(CoffeeShopsContext);
  if (context === undefined) {
    throw new Error('useCoffeeShops must be used within a CoffeeShopsProvider');
  }
  return context;
};