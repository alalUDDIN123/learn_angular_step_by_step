import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';



@NgModule({
  declarations: [
    HeroDetailsComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
