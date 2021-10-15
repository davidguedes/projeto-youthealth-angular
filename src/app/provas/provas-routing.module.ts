import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvasComponent } from './provas.component';

const routes: Routes = [
  {
    path: '',
    component: ProvasComponent
    /*children: [
      { path: 'novo', component: }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvasRoutingModule { }
