import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';

const routes: Routes = [
  { path: '', component: AlunosComponent },
  { path: ':id', component: AlunoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
