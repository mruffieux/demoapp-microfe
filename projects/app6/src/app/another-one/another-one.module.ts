import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherOneRoutingModule } from './another-one-routing.module';
import { AnotherOneComponent } from './another-one.component';


@NgModule({
  declarations: [
    AnotherOneComponent
  ],
  imports: [
    CommonModule,
    AnotherOneRoutingModule
  ]
})
export class AnotherOneModule { }
