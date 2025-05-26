import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Cafeteria, TipoCafeteria } from '../tipos';
import { cafeterias as cafeteriasIniciales } from '../datos/cafeterias';

interface ContextoCafeteriasType {
  cafeterias: Cafeteria[];
  cafeteriasFiltradas: Cafeteria[];
  terminoBusqueda: string;
  filtrosActivos: TipoCafeteria[];
  cafeteriaSeleccionada: Cafeteria | null;
  setTerminoBusqueda: (termino: string) => void;
  alternarFiltro: (filtro: TipoCafeteria) => void;
  limpiarFiltros: () => void;
  seleccionarCafeteria: (cafeteria: Cafeteria | null) => void;
}

const ContextoCafeterias = createContext<ContextoCafeteriasType | undefined>(undefined);

export const ProveedorCafeterias: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cafeterias] = useState<Cafeteria[]>(cafeteriasIniciales);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [filtrosActivos, setFiltrosActivos] = useState<TipoCafeteria[]>([]);
  const [cafeteriaSeleccionada, setCafeteriaSeleccionada] = useState<Cafeteria | null>(null);

  const alternarFiltro = (filtro: TipoCafeteria) => {
    setFiltrosActivos(prev => 
      prev.includes(filtro) 
        ? prev.filter(f => f !== filtro) 
        : [...prev, filtro]
    );
  };

  const limpiarFiltros = () => {
    setFiltrosActivos([]);
  };

  const seleccionarCafeteria = (cafeteria: Cafeteria | null) => {
    setCafeteriaSeleccionada(cafeteria);
  };

  const cafeteriasFiltradas = cafeterias.filter(cafeteria => {
    const coincideBusqueda = cafeteria.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) || 
                         cafeteria.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());
    
    const coincideFiltro = filtrosActivos.length === 0 || 
                         cafeteria.tipo.some(tipo => filtrosActivos.includes(tipo));
    
    return coincideBusqueda && coincideFiltro;
  });

  return (
    <ContextoCafeterias.Provider 
      value={{ 
        cafeterias,
        cafeteriasFiltradas,
        terminoBusqueda,
        filtrosActivos,
        cafeteriaSeleccionada,
        setTerminoBusqueda,
        alternarFiltro,
        limpiarFiltros,
        seleccionarCafeteria
      }}
    >
      {children}
    </ContextoCafeterias.Provider>
  );
};

export const usarCafeterias = () => {
  const contexto = useContext(ContextoCafeterias);
  if (contexto === undefined) {
    throw new Error('usarCafeterias debe ser usado dentro de un ProveedorCafeterias');
  }
  return contexto;
};