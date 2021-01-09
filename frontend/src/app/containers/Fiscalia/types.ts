import { GeoPosition } from "app/components/form/geo-marker/types";

/* --- STATE --- */
export interface FiscaliaState {
  form?:FiscaliaModel;
  redirect?:string;
}

export type ContainerState = FiscaliaState;

export interface FiscaliaModel {
  id?: number;
  nombre?: string;
  telefono?: string;
  direccion?: string;
  descripcion?: string;
  latitud?: number;
  longitud?: number;
  localizacion?:GeoPosition;
}