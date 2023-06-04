
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: AdminDashboardComponent
    },
    {
        path: "users",
        component: UsersComponent
    }
];


@NgModule({
    declarations: [AdminDashboardComponent, UsersComponent],
    imports: [RouterModule.forChild(routes)],
    exports: [ AdminDashboardComponent, UsersComponent]
})
export class AdminRoutingModule { }
