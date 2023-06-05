import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0

  OnIncrement() {
    this.counter += 5;
  }

  OnDecrement() {
    this.counter -= 10;
  }

  OnReset() {
    this.counter = 0
  }



}
