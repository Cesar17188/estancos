// Interface de licores destilados

export interface Producto {
  id?: string;
  producto?: string;
  img?: string;
  descripcion?: string;
  precioUnidad?: number;
  precioCaja?: number;
  stock?: number;
}
