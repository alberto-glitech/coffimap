import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useCoffeeShops } from '../../context/CoffeeShopsContext';
import { CoffeeShop } from '../../types';
import { Coffee, Loader2 } from 'lucide-react';

const MapView: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { filteredCoffeeShops, selectCoffeeShop } = useCoffeeShops();

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places']
      });

      try {
        await loader.load();
        
        if (mapRef.current) {
          const mapInstance = new google.maps.Map(mapRef.current, {
            center: { lat: 19.0583, lng: -98.3076 }, // Cholula center
            zoom: 15,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ],
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false
          });

          setMap(mapInstance);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
        setIsLoading(false);
      }
    };

    initMap();

    return () => {
      markers.forEach(marker => marker.setMap(null));
      setMarkers([]);
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    markers.forEach(marker => marker.setMap(null));
    const newMarkers: google.maps.Marker[] = [];

    filteredCoffeeShops.forEach(shop => {
      const marker = new google.maps.Marker({
        position: { lat: shop.location.lat, lng: shop.location.lng },
        map,
        title: shop.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#d97706',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-2 min-w-[200px]">
            <h3 class="font-semibold text-gray-900">${shop.name}</h3>
            <p class="text-sm text-gray-600 mt-1">${shop.shortDescription}</p>
            <div class="mt-2">
              <button
                onclick="window.selectCoffeeShop('${shop.id}')"
                class="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Ver detalles →
              </button>
            </div>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      newMarkers.push(marker);
    });

    setMarkers(newMarkers);

    (window as any).selectCoffeeShop = (shopId: string) => {
      const shop = filteredCoffeeShops.find(s => s.id === shopId);
      if (shop) {
        selectCoffeeShop(shop);
      }
    };
  }, [map, filteredCoffeeShops, selectCoffeeShop]);

  if (isLoading) {
    return (
      <div className="w-full h-[70vh] bg-amber-50 rounded-lg flex items-center justify-center dark:bg-gray-800">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-6 h-6 text-amber-600 animate-spin dark:text-amber-500" />
          <span className="text-amber-700 dark:text-amber-300">Cargando mapa...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
      
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button 
          onClick={() => map?.setZoom((map.getZoom() || 15) + 1)}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        >
          <span>+</span>
        </button>
        <button 
          onClick={() => map?.setZoom((map.getZoom() || 15) - 1)}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        >
          <span>−</span>
        </button>
      </div>

      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md dark:bg-gray-800">
        <div className="text-sm font-semibold mb-2 dark:text-white">Leyenda</div>
        <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
          <Coffee className="w-4 h-4 text-amber-600 mr-2 dark:text-amber-500" />
          <span>Cafetería</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;