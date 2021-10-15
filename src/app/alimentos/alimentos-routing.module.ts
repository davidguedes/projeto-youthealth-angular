import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentosComponent } from './alimentos.component';

const routes: Routes = [
  { path: '', component: AlimentosComponent },
  { path: ':id', component: AlimentosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosRoutingModule {}
