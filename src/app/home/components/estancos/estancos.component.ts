import { Component, OnInit } from '@angular/core';

import AOS from 'aos';
@Component({
  selector: 'app-estancos',
  templateUrl: './estancos.component.html',
  styleUrls: ['./estancos.component.scss']
})
export class EstancosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
