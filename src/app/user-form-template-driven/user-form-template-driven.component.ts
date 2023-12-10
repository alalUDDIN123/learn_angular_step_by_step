

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form-template-driven',
  templateUrl: './user-form-template-driven.component.html',
  styleUrls: ['./user-form-template-driven.component.css']
})
export class UserFormTemplateDrivenComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;
  submitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (this.userForm.valid) {
      // Handle form submission here
      const formData = this.userForm.value;
      console.log('Form submitted:', formData);
    } else {
      // Display validation errors
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
