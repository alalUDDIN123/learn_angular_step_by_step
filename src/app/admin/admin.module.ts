import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    UsersComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
