import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {

  @Output() incrementEvent = new EventEmitter<any>
  @Output() decrementEvent = new EventEmitter<any>
  @Output() resetEvent = new EventEmitter<any>


  increment() {
    this.incrementEvent.emit()
  }
  decrement() {
    this.decrementEvent.emit()
  }
  Reset() {
    this.resetEvent.emit()
  }

}
