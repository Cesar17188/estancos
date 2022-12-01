import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotasCataComponent } from './components/notas-cata/notas-cata.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: NotasCataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
