import { Cafeteria } from '../tipos';

export const cafeterias: Cafeteria[] = [
  {
    id: '1',
    nombre: 'Café Zócalo',
    descripcion: 'Un acogedor café tradicional ubicado frente al zócalo de San Pedro Cholula. Disfruta de café orgánico de la región mientras observas la vida pasar en la plaza principal. Nuestros baristas están capacitados para preparar desde expresos hasta elaboradas bebidas de especialidad.',
    descripcionCorta: 'Café tradicional con vista al zócalo de San Pedro Cholula.',
    tipo: ['tradicional', 'terraza'],
    calificacion: 4.5,
    imagen: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
    direccion: 'Av. Morelos 12, Centro, San Pedro Cholula',
    horario: 'Lun-Vie: 7:00-21:00, Sáb-Dom: 8:00-22:00',
    menu: 'Espresso, Cappuccino, Latte, Americano, Pastelería artesanal',
    ubicacion: {
      lat: 19.0583,
      lng: -98.3076
    }
  },
  {
    id: '2',
    nombre: 'Granos & Letras',
    descripcion: 'Librería y café donde puedes disfrutar de una buena lectura mientras saboreas café de especialidad. Contamos con una amplia selección de libros y revistas que puedes hojear mientras degustas nuestras bebidas. Ambiente tranquilo ideal para trabajar o estudiar.',
    descripcionCorta: 'Librería y café con ambiente perfecto para lectura y trabajo.',
    tipo: ['moderno', 'espacioTrabajo', 'especialidad'],
    calificacion: 4.8,
    imagen: 'https://images.pexels.com/photos/2187601/pexels-photo-2187601.jpeg',
    direccion: 'Calle 2 Poniente 504, San Pedro Cholula',
    horario: 'Lun-Dom: 9:00-22:00',
    menu: 'Café de especialidad, Tisanas, Pasteles caseros, Sándwiches gourmet',
    ubicacion: {
      lat: 19.0612,
      lng: -98.3052
    }
  },
  {
    id: '3',
    nombre: 'Azotea Café',
    descripcion: 'Café ubicado en una terraza con impresionantes vistas a la Gran Pirámide de Cholula y los volcanes. Disfruta de nuestros deliciosos platillos mientras contemplas el atardecer. Ideal para fotografías y momentos especiales. Ofrecemos variedad de cafés internacionales.',
    descripcionCorta: 'Terraza con vistas panorámicas a la pirámide y volcanes.',
    tipo: ['moderno', 'terraza', 'petfriendly'],
    calificacion: 4.7,
    imagen: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg',
    direccion: 'Av. 12 Oriente 15, San Pedro Cholula',
    horario: 'Lun-Jue: 11:00-20:00, Vie-Dom: 9:00-22:00',
    menu: 'Café de origen, Desayunos, Brunch, Cócteles',
    ubicacion: {
      lat: 19.0585,
      lng: -98.3001
    }
  },
  {
    id: '4',
    nombre: 'El Molino',
    descripcion: 'Café ubicado en un antiguo molino restaurado. Especializado en métodos de preparación alternativos como V60, Chemex y Aeropress. Nuestros baristas te explicarán el origen y características de cada café que servimos. Ofrecemos talleres de catación y preparación.',
    descripcionCorta: 'Especialistas en métodos de preparación alternativos de café.',
    tipo: ['tradicional', 'especialidad'],
    calificacion: 4.6,
    imagen: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    direccion: 'Calle 3 Norte 203, San Pedro Cholula',
    horario: 'Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00',
    menu: 'Café de especialidad, Pasteles artesanales, Sándwiches',
    ubicacion: {
      lat: 19.0631,
      lng: -98.3089
    }
  },
  {
    id: '5',
    nombre: 'Canela Café',
    descripcion: 'Café acogedor especializado en bebidas con canela y especias. Nuestro ambiente es perfecto para una charla tranquila o leer un buen libro. Ofrecemos opciones veganas y sin gluten. Los fines de semana tenemos música en vivo por las tardes.',
    descripcionCorta: 'Especialidad en bebidas con canela y especias.',
    tipo: ['tradicional', 'petfriendly'],
    calificacion: 4.3,
    imagen: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
    direccion: 'Calle 4 Sur 506, San Pedro Cholula',
    horario: 'Lun-Dom: 8:00-21:00',
    menu: 'Café especiado, Chai Latte, Pasteles caseros, Wraps',
    ubicacion: {
      lat: 19.0550,
      lng: -98.3060
    }
  },
  {
    id: '6',
    nombre: 'WorkCoffee',
    descripcion: 'Espacio de coworking y café para profesionales y creativos. Ofrecemos conexión a internet de alta velocidad, enchufes en todas las mesas y salas privadas para reuniones. Nuestro café es de origen único y tenemos snacks saludables para mantener tu energía.',
    descripcionCorta: 'Espacio de coworking con excelente café y conectividad.',
    tipo: ['moderno', 'espacioTrabajo', 'especialidad'],
    calificacion: 4.9,
    imagen: 'https://images.pexels.com/photos/3768730/pexels-photo-3768730.jpeg',
    direccion: 'Blvd. Forjadores 1009, San Pedro Cholula',
    horario: 'Lun-Vie: 7:00-22:00, Sáb: 9:00-20:00, Dom: 10:00-18:00',
    menu: 'Café de especialidad, Smoothies, Bowls, Sándwiches, Ensaladas',
    ubicacion: {
      lat: 19.0667,
      lng: -98.3109
    }
  },
  {
    id: '7',
    nombre: 'La Pirámide',
    descripcion: 'Cafetería con vista directa a la Gran Pirámide. Decoración inspirada en la cultura prehispánica y platillos con un toque de sabores tradicionales. Ofrecemos desayunos completos y comidas ligeras para reponerse después de visitar la zona arqueológica.',
    descripcionCorta: 'Cafetería con vista a la pirámide y decoración prehispánica.',
    tipo: ['tradicional', 'terraza'],
    calificacion: 4.4,
    imagen: 'https://images.pexels.com/photos/3437975/pexels-photo-3437975.jpeg',
    direccion: 'Calle 6 Norte 602, San Pedro Cholula',
    horario: 'Lun-Dom: 8:00-20:00',
    menu: 'Café de olla, Chocolate caliente, Tamales, Chilaquiles, Pasteles',
    ubicacion: {
      lat: 19.0578,
      lng: -98.3015
    }
  },
  {
    id: '8',
    nombre: 'Gatito Café',
    descripcion: 'El primer cat café de Cholula. Disfruta de un delicioso café en compañía de nuestros adorables gatos rescatados. Todos nuestros felinos están en adopción. El ambiente es tranquilo y acogedor, ideal para relajarse después de un día de turismo.',
    descripcionCorta: 'Cafetería con gatos rescatados que puedes acariciar mientras tomas café.',
    tipo: ['moderno', 'petfriendly'],
    calificacion: 4.7,
    imagen: 'https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg',
    direccion: 'Av. 14 Poniente 1205, San Pedro Cholula',
    horario: 'Lun-Dom: 11:00-20:00',
    menu: 'Café, Té, Pasteles caseros, Galletas, Snacks',
    ubicacion: {
      lat: 19.0599,
      lng: -98.3120
    }
  }
];