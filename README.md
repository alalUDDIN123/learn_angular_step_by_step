# @Input and @Output decorator

The `@Input` and `@Output` decorators are used in Angular to facilitate communication between parent and child components.

1. `@Input` Decorator:
The `@Input` decorator allows a parent component to pass data to its child component. By using the `@Input` decorator on a property in the child component, you can bind that property to a value passed from the parent component.

In below case, I  passed data from the parent component to the child component by defining an object in the parent component:

```typescript
// parent.component.ts
sendToChild = {
  name: "I am from parent component"
};
```

Then, bind the `sendToChild` object to the `GetData` input property of the child component in the parent component template:

```html
<!-- parent.component.html -->
<app-child [GetData]="sendToChild"></app-child>
```

Now, the `sendToChild` object is available in the child component as the `GetData` input property.

2. `@Output` Decorator:
The `@Output` decorator allows a child component to emit events to its parent component. By using the `@Output` decorator on an EventEmitter property in the child component,we can emit events with data that the parent component can listen to.

In the child component, define an output property using the `@Output` decorator and `EventEmitter`:

```typescript
// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() GetData: any;
  @Output() dataEvent = new EventEmitter<any>();

  // ...
}
```

Inside the child component, define an object (`sendToParent`) containing the data to be sent to the parent component:

```typescript
// child.component.ts
export class ChildComponent {
  // ...
  sendToParent = {
    title: "I am from child"
  };

  sendData() {
    this.dataEvent.emit(this.sendToParent);
  }
}
```

In the child component template, call the `sendData()` method when an action occurs (e.g., clicking a button) to emit the `sendToParent` object through the `dataEvent` output property:

```html
<!-- child.component.html -->
<button (click)="sendData()">Send Data to Parent</button>
```

Now, when the button is clicked in the child component, the `sendToParent` object is emitted through the `dataEvent` output property.

By using the `@Input` and `@Output` decorators, we can establish a communication channel between the parent and child components in Angular. This promotes component encapsulation and helps create modular, reusable, and maintainable components.
