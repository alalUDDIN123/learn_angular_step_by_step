import { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component"
import { HeroComponent } from "./hero/hero.component"
import { HeroListComponent } from "./hero-list/hero-list.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

export const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "about",
      component: AboutComponent
    },
    {
      path: "hero",
      component: HeroComponent
  
    },
    {
      path: "hero/:heroId",
      component: HeroListComponent
  
    },
    {
      path:"**",
      component:PageNotFoundComponent
    }
  ]