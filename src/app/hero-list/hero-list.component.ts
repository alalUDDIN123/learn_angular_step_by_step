import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroes } from '../HerosData';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  paramsId: string = '';
  myHeros = heroes;
  details: any[] = []

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('heroId');
    if (param) {
      this.paramsId = param;
      // filtering hero details with matching id
      let foundData = this.myHeros.filter((el) => el.sl == + param)
      this.details = foundData

    }
  }


}
