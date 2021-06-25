import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Remote1RoutingModule } from './remote1-routing.module';
import { Remote1Component } from './remote1.component';


@NgModule({
  declarations: [
    Remote1Component
  ],
  imports: [
    CommonModule,
    Remote1RoutingModule
  ]
})
export class Remote1Module { }
