import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteFourRoutingModule } from './remote-four-routing.module';
import { RemoteFourComponent } from './remote-four.component';


@NgModule({
  declarations: [
    RemoteFourComponent
  ],
  imports: [
    CommonModule,
    RemoteFourRoutingModule
  ]
})
export class RemoteFourModule { }
