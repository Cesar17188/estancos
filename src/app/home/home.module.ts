import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CoctelComponent } from './components/coctel/coctel.component';
import { EstancosComponent } from './components/estancos/estancos.component';
import { DestileriaComponent } from './components/destileria/destileria.component';
import { ContenidosComponent } from './components/contenidos/contenidos.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductoComponent,
    CoctelComponent,
    EstancosComponent,
    DestileriaComponent,
    ContenidosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
