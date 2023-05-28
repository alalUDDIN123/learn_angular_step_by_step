import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Registration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h2>Registration Form</h2>
      <p>Two-way data binding</p>
      <form #registrationForm="ngForm" (ngSubmit)="handleRegistrationForm(registrationForm)">

      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" minlength="4" maxlength="10" #nameInput="ngModel" name="name"
          autocomplete="off" [(ngModel)]="UserRegistration.name" required>
        <div *ngIf="nameInput.invalid && (nameInput.dirty || nameInput.touched)">
          <div *ngIf="nameInput.errors?.['required']">Name is required.</div>
          <div *ngIf="nameInput.errors?.['minlength']">Name should have at least 4 characters.</div>
          <div *ngIf="nameInput.errors?.['maxlength']">Name cannot exceed 10 characters.</div>
          
        </div>
      </div>


        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"
           #emailInput="ngModel" autocomplete="off"
            [(ngModel)]="UserRegistration.email" required>
          <div *ngIf="emailInput.invalid && (emailInput.dirty || nameInput.touched)">
          <div *ngIf="emailInput.errors?.['required']">Email is required.</div>
        </div>
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password"
           #passwordInput="ngModel" minlength="5" maxlength="8"
            autocomplete="off" [(ngModel)]="UserRegistration.password" required>
            <div *ngIf="passwordInput.invalid && (passwordInput.dirty || passwordInput.touched)">
          <div *ngIf="passwordInput.errors?.['required']">Password is required.</div>
          <div *ngIf="passwordInput.errors?.['minlength']">Password should have at least 6 characters.</div>
          <div *ngIf="passwordInput.errors?.['maxlength']">Password cannot exceed 8 characters.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password"
           name="confirm-password" 
           #ConfirmpasswordInput="ngModel"
            minlength="5" maxlength="8" 
            autocomplete="off" [(ngModel)]="UserRegistration.confirmPassword" required>

            <div *ngIf="ConfirmpasswordInput.invalid && (ConfirmpasswordInput.dirty || ConfirmpasswordInput.touched)">
          <div *ngIf="ConfirmpasswordInput.errors?.['required']">Confirm Password is required.</div>
          <div *ngIf="ConfirmpasswordInput.errors?.['minlength']"> Confirm Password should have at least 6 characters.</div>
          <div *ngIf="ConfirmpasswordInput.errors?.['maxlength']"> Confirm Password cannot exceed 8 characters.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="country">Country:</label>
          <select id="country" name="country" #countryInput="ngModel" [(ngModel)]="UserRegistration.country" required >
            <option value="" selected disabled>-- Select Country --</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>

          <div *ngIf="countryInput.invalid && (countryInput.dirty || countryInput.touched)">
          <div *ngIf="countryInput.errors?.['required']">Country is required.</div>
        </div>
        </div>

        <div class="form-group">
          <input type="submit" value="Register" [disabled]="registrationForm.invalid" >
        </div>
      </form>
    </div>
  `
})
export class AppComponent {
  title = 'learning angular';

  UserRegistration: Registration = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  }

  handleRegistrationForm(form: NgForm) {

    if (form.valid) {
      console.log("User registration data", this.UserRegistration);
    } else {
      console.log("Form is invalid. Please fill in all required fields.");
    }
  }


}
