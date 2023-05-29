
# `Angular Form Handling`

Forms are an essential part of web applications for collecting user input. Angular provides two approaches for handling forms: 
  - Template-driven forms
  -  Reactive forms. 

  This documentation will guide you through both approaches, explaining their differences and providing examples.

## `Template-driven Forms`

Template-driven forms rely on Angular directives and template binding to handle form controls and validation. The form controls are defined directly in the HTML template and Angular takes care of managing the form state.

### `Creating a Template-driven Form`

1. Import the FormsModule in the app module:

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ]
})
export class AppModule { }
```

2. `Create the form in the component template`:

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit()">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" ngModel required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" ngModel required email>

  <button type="submit">Submit</button>
</form>
```

3. `Handle form submission in the component`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  onSubmit() {
    // Form submission logic
  }
}
```

### `Template-driven Form Validation`

Template-driven forms provide built-in validation directives that can be added to form controls to enforce validation rules.

In the example above, the `required` directive is used to make the `name` and `email` fields required. The `email` directive is used to validate the `email` field against an email pattern.

You can access form control properties like validity and value using template reference variables and Angular's `ngModel` directive.

```html
<!-- Displaying validation errors -->
<div *ngIf="name.invalid && (name.dirty || name.touched)">
  <div *ngIf="name.errors.['required']">
    Name is required.
  </div>
</div>

<!-- Accessing form control value -->
<p>Your name: {{ name.value }}</p>
```

## `Reactive Forms`

Reactive forms are based on explicit form control objects that are created programmatically in the component. This approach provides more control and flexibility compared to template-driven forms.

### `Creating a Reactive Form`

1. Import the ReactiveFormsModule in the app module:

```typescript
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule
  ]
})
export class AppModule { }
```

2. `Create the form in the component`:

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Form submission logic
    }
  }
}
```

3. `Bind form controls in the template`:

```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <label for="name">Name:</label

>
  <input type="text" id="name" formControlName="name">

  <label for="email">Email:</label>
  <input type="email" id="email" formControlName="email">

  <button type="submit">Submit</button>
</form>
```

### `Reactive Form Validation`

Reactive forms use validators provided by Angular's `Validators` class. In the example above, the `Validators.required` validator is used to make the `name` field required, and `Validators.email` is used to validate the `email` field against an email pattern.

You can access form control properties like validity and value using the `formGroup` directive and the `formControlName` directive.

```html
<!-- Displaying validation errors -->
<div *ngIf="myForm.get('name').invalid && (myForm.get('name').dirty || myForm.get('name').touched)">
  <div *ngIf="myForm.get('name').errors.required">
    Name is required.
  </div>
</div>

<!-- Accessing form control value -->
<p>Your name: {{ myForm.get('name').value }}</p>
```

## Conclusion

Both Template-driven and Reactive forms have their strengths and are suitable for different scenarios. Template-driven forms are quicker to set up and require less code but are more suitable for simpler forms. Reactive forms provide more control and flexibility, making them a better choice for complex forms.
---
---
`git push origin form_handling`