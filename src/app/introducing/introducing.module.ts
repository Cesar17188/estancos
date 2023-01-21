import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroducingRoutingModule } from './introducing-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IntroducingRoutingModule
  ]
})
export class IntroducingModule { }
