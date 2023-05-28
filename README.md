## Data binding
  - Data binding is a powerful mechanism in Angular that establishes a connection between a component and its HTML template. It enables dynamic and interactive behavior in the application.

We can categorize the data binding into two main types:
-  one-way data binding 
-  two-way data binding.

**Important Syntax in case of binding**:
 - The binding punctuation of [], (), [()], and the prefix specify the direction of data flow.
    - Use `[]` to bind from source to view
    - Use `()` to bind from view to source
    - Use `[()]` to bind in a two-way sequence of view to source to view

### **`one-way data binding 👍👍👍`**: 

   - In one-way data binding, the data flows in a single direction, from the component to the template (UI) or from the template to the component. It means that changes in the component property will reflect in the template, but changes in the template will not affect the component property.

   - There are different ways to do one way data binding. In the below most common uses one way data binding briefly 
   explain.
      
      - `Interpolation Binding` : It is a way to insert dynamic values into the view template using double curly braces `{{ }}`

      - `Property Binding` : Property binding is used to set the value of a property or attribute of an HTML element based on a component property. It uses square brackets ([ ]) to bind a property

      - `Attribute Binding` : Attribute binding is used to set the value of an HTML attribute based on a component property. It also uses square brackets ([ ]) to bind an attribute 
 
      - `Class Binding` : Class binding allows you to conditionally apply CSS classes to HTML elements based on component properties. It uses square brackets ([ ]) with the class binding syntax

      - `Style Binding` : Style binding enables you to dynamically set CSS styles for HTML elements based on component properties. It also uses square brackets ([ ]) with the style binding syntax.


   Example:

   **`From component to view 👍👍👍`**:

1. Interpolation Binding:

Component:
```
export class AppComponent {
  greeting: string = 'Hello, world!';
}
```

View:
```
<h1>{{ greeting }}</h1>
```
Output:
```
Hello, world!
```

2. Property Binding:

Component:
```
export class AppComponent {
  textColor: string = 'blue';
}
```

View:
```
<p [style.color]="textColor">This text has a dynamic color.</p>
```
Output:
The text in the paragraph will have a blue color.

3. Attribute Binding:

Component:
```
export class AppComponent {
  imageURL: string = 'path/to/image.png';
}
```

View:
```
<img [src]="imageURL" alt="Dynamic Image">
```
Output:
The image source will be set to the specified URL.

4. Class Binding:

Component:
```
export class AppComponent {
  isHighlighted: boolean = true;
}
```

View:
```
<p [class.highlighted]="isHighlighted">This paragraph is highlighted.</p>
```
Output:
The paragraph text will have the "highlighted" class applied.

5. Style Binding:

Component:
```
export class AppComponent {
  fontSize: string = '20px';
}
```

View:
```
<p [style.font-size]="fontSize">This text has a dynamic font size.</p>
```
Output:
The font size of the paragraph text will be set to 20 pixels.

   **`From view to component 👍👍👍`**:

   - Event binding
   ```
    import { Component } from '@angular/core';
    @Component({
    selector: 'app-root',
    template: `
    <div style="text-align: center;">
    <h1>{{title}}</h1>
    <button (click)="handleClick('Hello from the view!')">Click me</button>

    </div>
    `
    })
    export class AppComponent {
    title = 'learning angular';

    handleClick(val: String) {
        alert(val)
    }
    }
   ```

---
---


**`Two-way data binding 👍👍👍`**:

Two-way data binding allows the data to flow in both directions, from the component to the template and from the template to the component. It means that changes in the component property will reflect in the template, and changes in the template will update the component property.

- `[(ngModel)]` is a common syntax used for two-way data binding in Angular. It combines property binding and event binding to achieve two-way binding.

Example:

Component:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <input [(ngModel)]="name" placeholder="Enter your name">
    <p>Welcome, {{ name }}!</p>
  `
})
export class ExampleComponent {
  name: string = 'John Doe';
}
```

In this example, we have an input field bound to the `name` property using `[(ngModel)]`. Whatever value the user enters in the input field will be reflected in the `name` property, and the paragraph below will display a personalized welcome message.

The initial value of the `name` property is set to "John Doe". If the user changes the value in the input field, the `name` property will be automatically updated, and the paragraph will display the updated welcome message.

This demonstrates two-way data binding as changes in the template (input field) affect the component property (`name`), and changes in the component property (`name`) are reflected in the template.

---
---
`git push origin data_binding`