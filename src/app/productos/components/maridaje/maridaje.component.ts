import { Component, Input, OnInit } from '@angular/core';
import { Maridaje } from '@core/models/maridaje.model';

@Component({
  selector: 'app-maridaje',
  templateUrl: './maridaje.component.html',
  styleUrls: ['./maridaje.component.scss']
})
export class MaridajeComponent implements OnInit {

  @Input() maridajes: Maridaje[] | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.maridajes);
  }

}
