import { Component, OnInit } from '@angular/core';

import { Producto } from '@core/models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productos = [
      {
        id: '1',
        producto: 'Ron',
        img: 'https://drive.google.com/uc?export=view&id=1fLsnoxo4lYwhJeFsJhPK1ljiq7hGM6L2',
        descripcion: 'Ron Añejo Agricola Estancos',
        precioUnidad: 15,
        precioCaja: 90,
        stock: 250
      },
      {
        id: '2',
        producto: 'Whiskey',
        img: 'https://drive.google.com/uc?export=view&id=1O65UcSQuFLv7v0paSIOBJzLtkg6VZDBe',
        descripcion: 'Whiskey Estancos',
        precioUnidad: 20,
        precioCaja: 120,
        stock: 250
      }
    ];
    console.log(this.productos);
  }

}
