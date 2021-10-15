import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvasRoutingModule } from './provas-routing.module';
import { ProvasComponent } from './provas.component';


@NgModule({
  declarations: [
    ProvasComponent
  ],
  imports: [
    CommonModule,
    ProvasRoutingModule
  ]
})
export class ProvasModule { }
