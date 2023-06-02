import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // Input property to receive data from parent
  @Input() GetData: any;

  // Output property to emit events to parent
  @Output() dataEvent = new EventEmitter<any>();

  @Output() todoEvent = new EventEmitter<string>

  // This is called when the component is initialized
  ngOnInit(): void {
    // console.log("Data from parent:", this.GetData);
  }

  // Data to be sent to the parent component
  sendToParent = {
    title: "I am from child"
  };

  // Function to send data to the parent component
  sendData() {
    this.dataEvent.emit(this.sendToParent);
  }

  send(val: string) {
    this.todoEvent.emit(val)
  }
}
