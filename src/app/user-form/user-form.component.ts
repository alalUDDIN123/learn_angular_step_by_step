import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
   Error: string = '';
   submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      imageUrl: [''],
      imageFile: [''],
      gender: ['male', Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
      state: ['', Validators.required],
    });
  }
  get formControls() {
    return this.userForm.controls
  }
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userForm.get('imageFile')?.setValue(file);
    }
  }

  clearFile() {
    this.userForm.get('imageFile')?.setValue(null);

  }

  readFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const fileName = file.name.split(".");
    const l = fileName.length - 1;
    const fileExtension = fileName[l];

    if (file.size > 2 * 1024 * 1024) {
      this.Error = "File size is greater than 2 MB";
      this.clearFile();
    } else if (
      fileExtension !== "pdf" &&
      fileExtension !== "docx" &&
      fileExtension !== "doc"
    ) {
      this.Error = "Only pdf, docx, and doc files are allowed";
      this.clearFile();
    } else {
      this.Error = "";
    }
  }




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
