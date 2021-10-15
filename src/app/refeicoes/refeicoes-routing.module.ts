import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefeicoesComponent } from './refeicoes.component';

const routes: Routes = [
  {
    path: '',
    component: RefeicoesComponent
    /*children: [
      { path: 'novo', component: }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefeicoesRoutingModule { }
