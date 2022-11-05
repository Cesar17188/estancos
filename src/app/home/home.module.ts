import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CoctelComponent } from './components/coctel/coctel.component';
import { EstancosComponent } from './components/estancos/estancos.component';
import { DestileriaComponent } from './components/destileria/destileria.component';
import { ContenidosComponent } from './components/contenidos/contenidos.component';


import { SharedModule } from '@shared/shared.module';
import { ProductosComponent } from './containers/productos/productos.component';
import { CoctelesComponent } from './containers/cocteles/cocteles.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductoComponent,
    CoctelComponent,
    EstancosComponent,
    DestileriaComponent,
    ContenidosComponent,
    ProductosComponent,
    CoctelesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
