import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente padre de contenedores secundarios

const routes: Routes = [
  {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
  },
  {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
        path: 'productos',
        loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
