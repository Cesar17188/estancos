import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maridaje } from '@core/models/maridaje.model';

@Component({
  selector: 'app-maridajes',
  templateUrl: './maridajes.component.html',
  styleUrls: ['./maridajes.component.scss']
})
export class MaridajesComponent implements OnInit {

  maridajes: Maridaje[] = [];

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
    this.fetchMaridajes(productId);
  }

  fetchMaridajes(id: any) {
    if (id == 1) {
      this.maridajes = this.maridaje_1;
    }
    else {
      this.maridajes = this.maridaje_2;
    }
  }
}
