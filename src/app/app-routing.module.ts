import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'alimentos',
    loadChildren: () => import('./alimentos/alimentos.module').then(m => m.AlimentosModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
  },
  {
    path: 'refeicoes',
    loadChildren: () => import('./refeicoes/refeicoes.module').then(m => m.RefeicoesModule)
  },
  {
    path: 'provas',
    loadChildren: () => import('./provas/provas.module').then(m => m.ProvasModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
