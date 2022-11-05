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
        img: 'https://drive.google.com/uc?export=view&id=1qBpXn96AyFKJ89CxjB4SGlsBU_HeMXHi',
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
        img: 'https://drive.google.com/uc?export=view&id=1CHaMeZm7QkSguoyCgFUTsfYkNmCqqNvc',
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
