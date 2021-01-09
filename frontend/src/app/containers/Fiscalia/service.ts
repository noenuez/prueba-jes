import http from '../../http/index';
import { FiscaliaModel } from './types';
export const base = '/fiscalia';

export const getFiscalia = (id: number) => {
  return http.get(base + '/fiscalia/' + id);
};
export const crear = (fiscalia?: FiscaliaModel) => {
  return http.post(base, fiscalia);
};

export const actualizar = (fiscalia?: FiscaliaModel) => {
  return http.put(base + '/' + fiscalia?.id, fiscalia);
};
export const eliminar = (id?: number) => {
  return http.delete(base + '/' + id);
};
