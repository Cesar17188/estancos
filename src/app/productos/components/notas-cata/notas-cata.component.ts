import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '@core/models/producto.model';

import { Maridaje } from '@core/models/maridaje.model';

@Component({
  selector: 'app-notas-cata',
  templateUrl: './notas-cata.component.html',
  styleUrls: ['./notas-cata.component.scss']
})
export class NotasCataComponent implements OnInit {


  licor: Producto = {};
  maridaje: Maridaje[] = [];
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

  maridaje_1 = [
    {
      id: '1',
      img: 'https://media.gq.com.mx/photos/620bcf7243f71a078a355280/16:9/w_2560%2Cc_limit/carnes-85650597.jpg',
      nombre_maridaje: 'Carne'
    },
    {
      id: '2',
      img: 'https://i0.wp.com/www.sitiosargentina.com.ar/wp-content/uploads/2021/12/JAMON-IBERICOS.jpg',
      nombre_maridaje: 'Jamón'
    },
    {
      id: '3',
      img: 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/quesos-variados_0.jpg',
      nombre_maridaje: 'Queso'
    },
    {
      id: '4',
      img: 'https://www.sabervivirtv.com/medio/2022/02/14/comer-nueces-va-bien-para-el-colesterol_8ec93d65_1280x720.jpg',
      nombre_maridaje: 'Nueces'
    }
  ];

  maridaje_2 = [
    {
      id: '1',
      img: 'https://media.gq.com.mx/photos/620bcf7243f71a078a355280/16:9/w_2560%2Cc_limit/carnes-85650597.jpg',
      nombre_maridaje: 'Carne'
    },
    {
      id: '2',
      img: 'https://i0.wp.com/www.sitiosargentina.com.ar/wp-content/uploads/2021/12/JAMON-IBERICOS.jpg',
      nombre_maridaje: 'Jamón'
    },
    {
      id: '3',
      img: 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/quesos-variados_0.jpg',
      nombre_maridaje: 'Queso'
    },
    {
      id: '4',
      img: 'https://www.sabervivirtv.com/medio/2022/02/14/comer-nueces-va-bien-para-el-colesterol_8ec93d65_1280x720.jpg',
      nombre_maridaje: 'Nueces'
    }
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let productId =
    this.route.snapshot.paramMap.get('id');
    this.licor = this.fetchProduct(productId);
    this.maridaje = this.fetchMaridaje(productId);
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

  fetchMaridaje(id: string | null) {
    let maridaje;
    if (id === '1') {
      maridaje = this.maridaje_1;
    } else {
      maridaje = this.maridaje_2;
    }
    return maridaje;
  }

}
