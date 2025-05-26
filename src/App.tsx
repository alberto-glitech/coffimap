import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import CoffeeShops from './pages/CoffeeShops';
import Map from './pages/Map';
import { CoffeeShopsProvider } from './context/CoffeeShopsContext';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('inicio');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    
    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'inicio':
        return <Home onNavigate={setActivePage} />;
      case 'cafeterias':
        return <CoffeeShops />;
      case 'mapa':
        return <Map />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <CoffeeShopsProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        
        {/* Dark mode toggle */}
        <button 
          onClick={toggleDarkMode}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-amber-500" />
          ) : (
            <Moon className="w-5 h-5 text-amber-700" />
          )}
        </button>
        
        {renderPage()}
        
        {/* Footer */}
        <footer className="bg-amber-800 text-amber-100 py-8 dark:bg-gray-900 dark:border-t dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="text-lg font-bold mb-2">COFFIMAP CHOLULA</div>
                <p className="text-sm text-amber-200 dark:text-gray-400">
                  Tu guía para encontrar el café perfecto en San Pedro Cholula
                </p>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-amber-200 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Términos</a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Privacidad</a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Contacto</a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-amber-700 text-sm text-center text-amber-300 dark:border-gray-800 dark:text-gray-500">
              © {new Date().getFullYear()} COFFIMAP CHOLULA. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </div>
    </CoffeeShopsProvider>
  );
}

export default App;