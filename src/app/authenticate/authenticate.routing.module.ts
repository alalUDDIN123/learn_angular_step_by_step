import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path:'',
        redirectTo:"/",
        pathMatch:"full"
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
        path:"signup",
        component:SignupComponent
    }
]

@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [RouterModule.forChild(routes)],
    exports:[LoginComponent,SignupComponent]
})

export class AuthenticateRoutingModule { }