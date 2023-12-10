import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';


@NgModule({
  declarations: [
    HomeComponent,
    PrevDirective,
    NextDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
