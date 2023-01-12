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
        img: 'https://firebasestorage.googleapis.com/v0/b/estancosdistillingcompany.appspot.com/o/productos%2FBotellaRonL.png?alt=media&token=4b2c8f1d-e2b1-4df6-81b8-32066230d0f5',
        descripcion: 'Ron Añejo Agricola Estancos',
        precioUnidad: 15,
        precioCaja: 90,
        stock: 250
      },
      {
        id: '2',
        producto: 'Whiskey',
        img: 'https://firebasestorage.googleapis.com/v0/b/estancosdistillingcompany.appspot.com/o/productos%2FBotellaWhiskey3L.png?alt=media&token=88899a01-fc59-4a7e-b269-63c2a7e74f09',
        descripcion: 'Whiskey Estancos',
        precioUnidad: 20,
        precioCaja: 120,
        stock: 250
      }
    ];
    console.log(this.productos);
  }

}
