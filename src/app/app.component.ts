import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align: center;">
      <h1>Hello Angular</h1>
      <p>{{message}}</p>
      <!-- The message property is a data binding expression enclosed in curly braces -->
      <button (click)="updateMessage()">Update message</button>
      <!-- The button triggers the updateMessage() method when clicked -->
    </div>
  `
})
export class AppComponent {
  message = 'Initial message';
  // The initial value of the message property

  updateMessageClass = 'Message updated successfully';
  // The value to be assigned to the message property when updated

  updateMessage() {
    this.message = this.updateMessageClass;
    // Updates the message property with the value in updateMessageClass
  }
}

