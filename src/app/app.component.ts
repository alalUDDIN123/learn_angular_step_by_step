import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Angular Routing";
  currentRoute: string = '/';

  constructor(
    private router: Router,
    private location: Location
  ) { }

  //  get current URL👍👍👍👍
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // either this or
        // this.currentRoute =this.location.path()

        // this 
        this.currentRoute = event.url
      }
    })


  }



}
