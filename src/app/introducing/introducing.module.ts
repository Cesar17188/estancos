import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IntroducingRoutingModule } from './introducing-routing.module';
import { IndexComponent } from './components/index/index.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IntroducingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class IntroducingModule { }
