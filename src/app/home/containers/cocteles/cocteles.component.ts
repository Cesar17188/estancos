import { Component, OnInit } from '@angular/core';

import { Coctel } from '@core/models/coctel.model';


@Component({
  selector: 'app-cocteles',
  templateUrl: './cocteles.component.html',
  styleUrls: ['./cocteles.component.scss']
})
export class CoctelesComponent implements OnInit {

  cocteles: Coctel[]=[];

  constructor() { }

  ngOnInit(): void {
    this.fetchCoctel();
  }

  fetchCoctel() {
    this.cocteles = [
      {
        id: '1',
        nombre: 'Cuba Libre',
        descripcion: 'Cuba libre fabricado con Ron Estancos',
        img: 'https://firebasestorage.googleapis.com/v0/b/estancosdistillingcompany.appspot.com/o/cocteles%2Fcoctel2.png?alt=media&token=3219591a-d2a6-4f2a-84fd-5a75202e2a43',
        licores: [
          { id: '1',
            producto: 'Ron Estancos'
          }
        ],
        ingredientes: ['Ron Estancos', 'Jarabe de azucar', 'Zumo de Limon', 'Hierba buena', 'Hielo'],
        preparación: ['paso 1', 'paso 2', 'paso 3', 'paso 4']
      },
      {
        id: '2',
        nombre: 'Whiskey Sour',
        descripcion: 'Whiskey Sour fabricado con Whiskey Estancos',
        img: 'https://firebasestorage.googleapis.com/v0/b/estancosdistillingcompany.appspot.com/o/cocteles%2Fcoctel1.png?alt=media&token=4e0b655c-dacc-4b6a-bc16-ee95758b2790',
        licores: [
          { id: '2',
            producto: 'Whiskey Estancos'
          }
        ],
        ingredientes: ['Whiskey Estancos', 'Jarabe de azucar', 'Zumo de Limon', 'Hielo'],
        preparación: ['paso 1', 'paso 2', 'paso 3', 'paso 4']
      }
    ];
    console.log(this.cocteles);
  }

}
