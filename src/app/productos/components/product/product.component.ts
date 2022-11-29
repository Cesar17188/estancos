import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';

import { Producto } from '@core/models/producto.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() producto: Producto | undefined;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
