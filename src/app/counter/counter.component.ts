import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CounterState } from './NgRx/CounterState';
import { increment, decrement, reset } from './NgRx/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count: number = 0;

  constructor(private store: Store<{ counterCall: CounterState }>) {
    this.store.pipe(select('counterCall')).subscribe((state: CounterState) => {
      this.count = state.countValue;
    });
  }

  increment() {
    console.log("Increment method called");
    this.store.dispatch(increment());
  }

  decrement() {
    console.log("Decrement method called");
    this.store.dispatch(decrement());
  }

  reset() {
    console.log("Reset method called");
    this.store.dispatch(reset());
  }
}
