import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { passwordMatch } from './validators/MismatchPassword';

interface Registration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
}

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = 'learning angular';
  isShowTemplateDrivenForm: boolean = true

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


  // reactive form

  integreRegex = /^\d+$/

  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  registerForm = new FormGroup({

    fname: new FormControl("", [Validators.required, Validators.maxLength(32)]),

    lname: new FormControl("", [Validators.required, Validators.maxLength(32)]),

    age: new FormControl("", [Validators.required, Validators.min(18), Validators.max(60), Validators.pattern(this.integreRegex)]),

    mobile: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.integreRegex)]),

    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),

    password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

    confirm_password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

  },[passwordMatch("password", "confirm_password")])



  getControl(name: any): AbstractControl | null {

    return this.registerForm.get(name)

  }



  registerFn() {

    console.log(this.registerForm.value)

  }


}
