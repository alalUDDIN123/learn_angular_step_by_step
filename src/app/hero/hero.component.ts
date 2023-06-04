import { Component } from '@angular/core';
import { heroes } from "../HerosData"
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  myHeroes = heroes

  ngOnInit(): void {
  
  }
}
