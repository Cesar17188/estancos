import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from '@core/models/producto.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-notas-cata',
  templateUrl: './notas-cata.component.html',
  styleUrls: ['./notas-cata.component.scss']
})
export class NotasCataComponent implements OnInit {

  licor: Producto = {};
  ron: Producto = {
    id: '1',
    producto: 'Ron',
    img: 'https://drive.google.com/uc?export=view&id=1fLsnoxo4lYwhJeFsJhPK1ljiq7hGM6L2',
    descripcion: 'Ron Agrícola Estancos',
    precioUnidad: 15,
    precioCaja: 90,
    notasCata: {
      vista: 'posee una tonalidad castaño oscuro asemejando a la madera de roble',
      olfato: 'presenta Aromas iniciales Dulces Dando paso a un aroma de vainilla y madera',
      gusto: 'contiene notas dulces de la caña de azúcar mescladas con la vainilla del roble blanco y el picor característico de rones jóvenes'
    }
  };
  whiskey: Producto = {
    id: '2',
    producto: 'Whiskey',
    img: 'https://drive.google.com/uc?export=view&id=1O65UcSQuFLv7v0paSIOBJzLtkg6VZDBe',
    descripcion: 'Whiskey Estancos, single malt, single barrel',
    precioUnidad: 25,
    precioCaja: 130,
    notasCata: {
      vista: 'posee tonalidades doradas suaves, parecidas al oro, recordando a los campos de cebada en tiempos de cosecha',
      olfato: 'presenta aromas iniciales a miel natural, dando paso a un aroma de pimienta negra fresca',
      gusto: 'contiene notas dulces mescladas con el picor característico de la cebada malteada y el whiskey'
    }
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let productId =
    this.route.snapshot.paramMap.get('id');
    this.licor = this.fetchProduct(productId);
    console.log(this.licor);
  }

  fetchProduct(id: string | null) {
    let product;
    if (id === '1') {
      product = this.ron;
    } else {
      product = this.whiskey;
    }
    return product;
  }



}
