import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentosRoutingModule } from './alimentos-routing.module';
import { AlimentosComponent } from './alimentos.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AlimentosComponent,
  ],
  imports: [
    CommonModule,
    AlimentosRoutingModule,
    NgxPaginationModule
  ]
})
export class AlimentosModule { }
