import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Remote3RoutingModule } from './remote3-routing.module';
import { Remote3Component } from './remote3.component';


@NgModule({
  declarations: [
    Remote3Component
  ],
  imports: [
    CommonModule,
    Remote3RoutingModule
  ]
})
export class Remote3Module { }
