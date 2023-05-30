# Directives in Angular

Directives are a fundamental part of Angular and provide a way to add additional behavior to elements in our Angular applications. 

  There are three types of directives in Angular:

  - **`Component directives`**
  - **`Structural directives`**
  - **`Attribute directives`**.

## Component Directives

Component directives are used to create reusable, self-contained components with their own template, styles, and logic. They are typically used to build complex UI elements. Here's an example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  template: `
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  `,
  styles: [
    `
    h1 {
      color: blue;
    }
    `,
  ],
})
export class CustomComponent {
  title = 'Custom Component';
  message = 'This is a custom component.';
}
```

In this example, we define a custom component directive using the `@Component` decorator. The `selector` specifies the name of the component, and the `template` defines the HTML template for the component. The `styles` property allows you to provide component-specific styles.

---
---
## Structural Directives

Structural directives manipulate the DOM by adding or removing elements based on conditions. They use the `*` prefix in the template syntax. The most commonly used structural directive is `ngIf`, which conditionally adds or removes an element from the DOM. There are three main built-in structural directives:

1. `ngIf`: Conditionally adds or removes an element from the DOM.
2. `ngFor`: Loops over a collection and generates multiple elements.
3. `ngSwitch`: Conditionally renders elements based on a value.

Here's an example of `ngIf`:

```html
<div *ngIf="isLoggedIn">Welcome, {{ username }}!</div>
```

In this example, the `*ngIf` directive is applied to the `<div>` element. If the `isLoggedIn` property in the component evaluates to `true`, the `<div>` will be rendered; otherwise, it will be removed from the DOM.

---
---
## Attribute Directives : 

 Attribute directives in Angular modify the behavior or appearance of an element by manipulating its attributes. Angular provides several built-in attribute directives that you can use out of the box. Let's explore some of the commonly used built-in attribute directives:

### ngClass

The `ngClass` directive allows you to conditionally apply CSS classes to an element based on certain conditions. You can use it to add or remove classes dynamically. Here's an example:

```html
<button [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">Button</button>
```

In this example, the `ngClass` directive is applied to the `<button>` element. The classes `'active'` and `'disabled'` will be added to the button element based on the values of `isActive` and `isDisabled` properties in the component.

### ngStyle

The `ngStyle` directive enables you to apply inline styles to an element based on dynamic conditions. It allows you to dynamically set CSS styles using an object literal or by binding to a component property. Here's an example:

```html
<div [ngStyle]="{ 'background-color': bgColor, 'color': textColor }">Styled Div</div>
```

In this example, the `ngStyle` directive is applied to the `<div>` element. The `bgColor` and `textColor` properties in the component determine the background color and text color of the div, respectively.

### ngModel

The `ngModel` directive is used in forms for two-way data binding. It binds the value of an input element to a component property and keeps them in sync. It allows you to both set and get the value of the input field. Here's an example:

```html
<input [(ngModel)]="name" placeholder="Enter your name" />
<p>Your name is: {{ name }}</p>
```

In this example, the `ngModel` directive is applied to the `<input>` element, binding it to the `name` property in the component. Any changes in the input field will be reflected in the component, and vice versa.

---
---

`git push origin directives`