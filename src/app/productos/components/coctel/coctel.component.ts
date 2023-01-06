import { Component, Input, OnInit } from '@angular/core';
import { Coctel } from '@core/models/coctel.model';

@Component({
  selector: 'app-coctel',
  templateUrl: './coctel.component.html',
  styleUrls: ['./coctel.component.scss']
})
export class CoctelComponent implements OnInit {

  @Input() coctel: Coctel | undefined;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
