import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';

import { Producto } from '@core/models/producto.model';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto | undefined;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
