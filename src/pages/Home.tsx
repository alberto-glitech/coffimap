import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCoffeeShops from '../components/home/FeaturedCoffeeShops';
import About from '../components/home/About';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16">
      <Hero onExploreClick={() => onNavigate('cafeterias')} />
      <FeaturedCoffeeShops onViewAllClick={() => onNavigate('cafeterias')} />
      <About />
    </div>
  );
};

export default Home;