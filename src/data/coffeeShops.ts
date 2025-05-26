import { CoffeeShop } from '../types';

export const coffeeShops: CoffeeShop[] = [
  {
    id: '1',
    name: 'Café Zócalo',
    description: 'Un acogedor café tradicional ubicado frente al zócalo de San Pedro Cholula. Disfruta de café orgánico de la región mientras observas la vida pasar en la plaza principal. Nuestros baristas están capacitados para preparar desde expresos hasta elaboradas bebidas de especialidad.',
    shortDescription: 'Café tradicional con vista al zócalo de San Pedro Cholula.',
    type: ['traditional', 'outdoor'],
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
    address: 'Av. Morelos 12, Centro, San Pedro Cholula',
    hours: 'Lun-Vie: 7:00-21:00, Sáb-Dom: 8:00-22:00',
    menu: 'Espresso, Cappuccino, Latte, Americano, Pastelería artesanal',
    location: {
      lat: 19.0583,
      lng: -98.3076
    }
  },
  {
    id: '2',
    name: 'Granos & Letras',
    description: 'Librería y café donde puedes disfrutar de una buena lectura mientras saboreas café de especialidad. Contamos con una amplia selección de libros y revistas que puedes hojear mientras degustas nuestras bebidas. Ambiente tranquilo ideal para trabajar o estudiar.',
    shortDescription: 'Librería y café con ambiente perfecto para lectura y trabajo.',
    type: ['modern', 'workspace', 'specialty'],
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2187601/pexels-photo-2187601.jpeg',
    address: 'Calle 2 Poniente 504, San Pedro Cholula',
    hours: 'Lun-Dom: 9:00-22:00',
    menu: 'Café de especialidad, Tisanas, Pasteles caseros, Sándwiches gourmet',
    location: {
      lat: 19.0612,
      lng: -98.3052
    }
  },
  {
    id: '3',
    name: 'Azotea Café',
    description: 'Café ubicado en una terraza con impresionantes vistas a la Gran Pirámide de Cholula y los volcanes. Disfruta de nuestros deliciosos platillos mientras contemplas el atardecer. Ideal para fotografías y momentos especiales. Ofrecemos variedad de cafés internacionales.',
    shortDescription: 'Terraza con vistas panorámicas a la pirámide y volcanes.',
    type: ['modern', 'outdoor', 'petfriendly'],
    rating: 4.7,
    image: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg',
    address: 'Av. 12 Oriente 15, San Pedro Cholula',
    hours: 'Lun-Jue: 11:00-20:00, Vie-Dom: 9:00-22:00',
    menu: 'Café de origen, Desayunos, Brunch, Cócteles',
    location: {
      lat: 19.0585,
      lng: -98.3001
    }
  },
  {
    id: '4',
    name: 'El Molino',
    description: 'Café ubicado en un antiguo molino restaurado. Especializado en métodos de preparación alternativos como V60, Chemex y Aeropress. Nuestros baristas te explicarán el origen y características de cada café que servimos. Ofrecemos talleres de catación y preparación.',
    shortDescription: 'Especialistas en métodos de preparación alternativos de café.',
    type: ['traditional', 'specialty'],
    rating: 4.6,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    address: 'Calle 3 Norte 203, San Pedro Cholula',
    hours: 'Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00',
    menu: 'Café de especialidad, Pasteles artesanales, Sándwiches',
    location: {
      lat: 19.0631,
      lng: -98.3089
    }
  },
  {
    id: '5',
    name: 'Canela Café',
    description: 'Café acogedor especializado en bebidas con canela y especias. Nuestro ambiente es perfecto para una charla tranquila o leer un buen libro. Ofrecemos opciones veganas y sin gluten. Los fines de semana tenemos música en vivo por las tardes.',
    shortDescription: 'Especialidad en bebidas con canela y especias.',
    type: ['traditional', 'petfriendly'],
    rating: 4.3,
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
    address: 'Calle 4 Sur 506, San Pedro Cholula',
    hours: 'Lun-Dom: 8:00-21:00',
    menu: 'Café especiado, Chai Latte, Pasteles caseros, Wraps',
    location: {
      lat: 19.0550,
      lng: -98.3060
    }
  },
  {
    id: '6',
    name: 'WorkCoffee',
    description: 'Espacio de coworking y café para profesionales y creativos. Ofrecemos conexión a internet de alta velocidad, enchufes en todas las mesas y salas privadas para reuniones. Nuestro café es de origen único y tenemos snacks saludables para mantener tu energía.',
    shortDescription: 'Espacio de coworking con excelente café y conectividad.',
    type: ['modern', 'workspace', 'specialty'],
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3768730/pexels-photo-3768730.jpeg',
    address: 'Blvd. Forjadores 1009, San Pedro Cholula',
    hours: 'Lun-Vie: 7:00-22:00, Sáb: 9:00-20:00, Dom: 10:00-18:00',
    menu: 'Café de especialidad, Smoothies, Bowls, Sándwiches, Ensaladas',
    location: {
      lat: 19.0667,
      lng: -98.3109
    }
  },
  {
    id: '7',
    name: 'La Pirámide',
    description: 'Cafetería con vista directa a la Gran Pirámide. Decoración inspirada en la cultura prehispánica y platillos con un toque de sabores tradicionales. Ofrecemos desayunos completos y comidas ligeras para reponerse después de visitar la zona arqueológica.',
    shortDescription: 'Cafetería con vista a la pirámide y decoración prehispánica.',
    type: ['traditional', 'outdoor'],
    rating: 4.4,
    image: 'https://images.pexels.com/photos/3437975/pexels-photo-3437975.jpeg',
    address: 'Calle 6 Norte 602, San Pedro Cholula',
    hours: 'Lun-Dom: 8:00-20:00',
    menu: 'Café de olla, Chocolate caliente, Tamales, Chilaquiles, Pasteles',
    location: {
      lat: 19.0578,
      lng: -98.3015
    }
  },
  {
    id: '8',
    name: 'Gatito Café',
    description: 'El primer cat café de Cholula. Disfruta de un delicioso café en compañía de nuestros adorables gatos rescatados. Todos nuestros felinos están en adopción. El ambiente es tranquilo y acogedor, ideal para relajarse después de un día de turismo.',
    shortDescription: 'Cafetería con gatos rescatados que puedes acariciar mientras tomas café.',
    type: ['modern', 'petfriendly'],
    rating: 4.7,
    image: 'https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg',
    address: 'Av. 14 Poniente 1205, San Pedro Cholula',
    hours: 'Lun-Dom: 11:00-20:00',
    menu: 'Café, Té, Pasteles caseros, Galletas, Snacks',
    location: {
      lat: 19.0599,
      lng: -98.3120
    }
  }
];