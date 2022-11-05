import { Producto } from '../models/producto.model';

// Interface de cocteles

export interface Coctel {
  id?: string;
  nombre?: string;
  descripcion?: string;
  img?: string;
  licores?: Producto[];
  ingredientes?: string[];
  preparación?: string[];
}
