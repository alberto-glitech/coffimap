export interface CoffeeShop {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  type: CoffeeShopType[];
  rating: number;
  image: string;
  address: string;
  hours: string;
  menu?: string;
  location: {
    lat: number;
    lng: number;
  };
}

export type CoffeeShopType = 
  | 'traditional' 
  | 'modern' 
  | 'petfriendly' 
  | 'workspace' 
  | 'outdoor' 
  | 'specialty';

export const coffeeShopTypeLabels: Record<CoffeeShopType, string> = {
  traditional: 'Tradicional',
  modern: 'Moderno',
  petfriendly: 'Pet Friendly',
  workspace: 'Espacio de Trabajo',
  outdoor: 'Terraza',
  specialty: 'Café de Especialidad'
};