import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingPageComponent } from './components/working-page/working-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorkingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingPageRoutingModule { }
