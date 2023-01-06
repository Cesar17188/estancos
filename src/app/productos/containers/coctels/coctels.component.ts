import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coctel } from '@core/models/coctel.model';

@Component({
  selector: 'app-coctels',
  templateUrl: './coctels.component.html',
  styleUrls: ['./coctels.component.scss'],
})
export class CoctelsComponent implements OnInit {
  cocteles: Coctel[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let productId =
    this.route.snapshot.paramMap.get('id');
    this.fetchCoctels(productId);
  }




  fetchCoctels(id: any) {
    if (id == 1) {
      this.cocteles = [
        {
          id: '1',
          nombre: 'Cuba Libre',
          img: 'https://www.196flavors.com/wp-content/uploads/2018/09/cuba-libre-1-FP.jpg',
          descripcion: 'Cuba Libre con Ron Estancos',
          licores: [
            {
              id: '1',
              producto: 'Ron',
              img: 'https://drive.google.com/uc?export=view&id=1fLsnoxo4lYwhJeFsJhPK1ljiq7hGM6L2',
              descripcion: 'Ron Añejo Agricola Estancos',
              precioUnidad: 15,
              precioCaja: 90,
              stock: 250,
            },
          ],
          ingredientes: [
            '50 ml de ron Estancos',
            '150 ml de Coca-Cola ((o más))',
            '4 cuñas de lima (, incluida una para decorar)',
            'Cubitos de hielo',
          ],
          preparación: [
            'Pon hielo en un vaso.',
            'Llena el vaso con ron y cola',
            'Agrega el jugo de lima y mezcla bien.',
          ],
        } ]
    }
    else {
      this.cocteles = [
        {
          id: '2',
          nombre: 'Whisky Sour',
          img: 'https://thecookinglab.es/wp-content/uploads/2018/11/como-prepar-whisky-sour.jpg',
          descripcion: 'Whisky Sour Estancos',
          licores: [
            {
              id: '2',
              producto: 'Whiskey',
              img: 'https://drive.google.com/uc?export=view&id=1O65UcSQuFLv7v0paSIOBJzLtkg6VZDBe',
              descripcion: 'Whiskey Estancos',
              precioUnidad: 20,
              precioCaja: 120,
              stock: 250
            }
          ],
          ingredientes: [
            '45 mL de Whisky',
            '30 mL de zumo de limón',
            '2 cucharadas de azúcar',
            'Clara de 1 huevo',
            'Hielos',
            'Piel de una naranja para decorar'
          ],
          preparación: [
            'Añade en una coctelera el whisky, zumo de limón, clara de huevo y azúcar.',
            'Agita vigorosamente la coctelera unos 10 segundos sin ningún hielo. Este paso se llama «dry shaking», donde creamos la espuma de la clara de huevo.',
            'Añade unos hielos a la mezcla y agítala otra vez unos 10 segundos.',
            'Cuela el Whisky Sour en dos copas de whisky con hielos.'
          ],
        }
      ]
    }
  }
}
