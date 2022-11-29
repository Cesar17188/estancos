import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { SharedModule } from '@sharedshared.module';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent,
        ProductComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductosRoutingModule,
    ]
})
export class ProductosModule { }
