import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <div style="text-align: center;">
            <h1>{{title}}</h1>
            <p>Event Binding</p>
            <br>
            <p>-------------------------------   Click event start-------------------------------</p>
            <p> {{initialTitle}}</p>
            <button (click)="changeText()" >Change Text</button>
            <p>-------------------------------   Click event end-------------------------------</p>
            <p>--------------------------------------------------------------------------------</p>

            <p>------------------------------- input event start-------------------------------</p>

            <input type="text" (input)="inputEvent($event)">
            <p> {{inPutValue}}</p>
            <p>-------------------------------  Input event end-------------------------------</p>
            <p>-----------------------------------------------------------------------------------</p>
            <p>------------------------------- Change event start-------------------------------</p>

            <select (change)="handleSelection($event)">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <br>
            <p>Selected Value :{{selectValue}} </p>

            <p>-------------------------------  Change event end-------------------------------</p>
           
           
      

          </div>
  `

})
export class AppComponent {
  title: String = 'learning angular';
  initialTitle: String = "Click Below button to change me"
  updatedTitle: String = "I am a updated title"
  inPutValue: String = "Initial Value"
  selectValue: String = ""

  changeText() {
    this.initialTitle = this.updatedTitle
  }


  // input event
  inputEvent(event: any) {
    let value = event?.target.value;
    this.inPutValue = value;
  }

  // change event
  handleSelection(event: any) {
    let selectedValue = event?.target.value;
    this.selectValue = selectedValue
  }
}
