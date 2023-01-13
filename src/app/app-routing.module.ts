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
  },
  {
    path: '**',
    loadChildren: () => import('./working-page/working-page.module').then( m => m.WorkingPageModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
