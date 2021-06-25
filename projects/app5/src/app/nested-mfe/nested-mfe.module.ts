import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedMfeRoutingModule } from './nested-mfe-routing.module';
import { NestedMfeComponent } from './nested-mfe.component';


@NgModule({
  declarations: [
    NestedMfeComponent
  ],
  imports: [
    CommonModule,
    NestedMfeRoutingModule
  ]
})
export class NestedMfeModule { }
