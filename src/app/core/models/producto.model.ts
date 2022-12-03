import { NCatas } from './notas_cata.model';
import { Coctel } from './coctel.model';
import { Maridaje } from './maridaje.model';
// Interface de licores destilados

export interface Producto {
  id?: string;
  producto?: string;
  img?: string;
  descripcion?: string;
  precioUnidad?: number;
  precioCaja?: number;
  stock?: number;
  notasCata?: NCatas;
  cocteles?: Coctel[];
  maridaje?: Maridaje[];
}
