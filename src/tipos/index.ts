export interface Cafeteria {
  id: string;
  nombre: string;
  descripcion: string;
  descripcionCorta: string;
  tipo: TipoCafeteria[];
  calificacion: number;
  imagen: string;
  direccion: string;
  horario: string;
  menu?: string;
  ubicacion: {
    lat: number;
    lng: number;
  };
}

export type TipoCafeteria = 
  | 'tradicional' 
  | 'moderno' 
  | 'petfriendly' 
  | 'espacioTrabajo' 
  | 'terraza' 
  | 'especialidad';

export const etiquetasTipoCafeteria: Record<TipoCafeteria, string> = {
  tradicional: 'Tradicional',
  moderno: 'Moderno',
  petfriendly: 'Pet Friendly',
  espacioTrabajo: 'Espacio de Trabajo',
  terraza: 'Terraza',
  especialidad: 'Café de Especialidad'
};