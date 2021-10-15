import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefeicoesRoutingModule } from './refeicoes-routing.module';
import { RefeicoesComponent } from './refeicoes.component';

@NgModule({
  declarations: [
    RefeicoesComponent
  ],
  imports: [
    CommonModule,
    RefeicoesRoutingModule
  ]
})
export class RefeicoesModule { }
