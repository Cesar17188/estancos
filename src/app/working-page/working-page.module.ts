import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkingPageRoutingModule } from './working-page-routing.module';
import { WorkingPageComponent } from './components/working-page/working-page.component';

import { SharedModule } from '@sharedshared.module'

@NgModule({
  declarations: [
    WorkingPageComponent
  ],
  imports: [
    CommonModule,
    WorkingPageRoutingModule,
    SharedModule
  ]
})
export class WorkingPageModule { }
