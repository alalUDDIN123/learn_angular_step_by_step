
## Angular Templates & Data Binding

Angular Templates:
- Templates in Angular are HTML files that define the structure and layout of the user interface.
- Angular templates use a special syntax that allows for dynamic rendering of data and logic.

Data Binding:
- Data binding is the mechanism in Angular that establishes a connection between the component's data and the template, enabling automatic synchronization and updates.
- It allows for the seamless flow of data between the component and the template, ensuring a consistent and up-to-date user interface.

Example: 

**Template:**

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello Angular</h1>
    <p>{{title}}</p> 
    <!-- The title property is displayed using data binding -->
  `
})
export class AppComponent {
  title = 'This is an example of an Angular template';
}
```

**Data Binding:**

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align: center;">
      <h1>Hello Angular</h1>
      <p>{{message}}</p>
      <!-- The message property is displayed using data binding -->
      <button (click)="updateMessage()">Update message</button>
      <!-- The button triggers the updateMessage() method when clicked -->
    </div>
  `
})
export class AppComponent {
  message = 'Initial message';

  updateMessageClass = 'Message updated successfully';

  updateMessage() {
    this.message = this.updateMessageClass;
    // Updates the message property with the value in updateMessageClass
  }
}
```
---
---
`git push origin template_and_data_binding`