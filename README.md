# Angular Application Testing

This README provides instructions on how to test an Angular application, using an example component called "Counter." The Counter component is used to demonstrate how to write unit tests for Angular components.


## Creating the Counter Component

In this example, we'll create a Counter component that increments and decrements a counter value. Follow these steps to create the Counter component:

1. Generate the Counter component by running the following command:

   ```bash
   ng generate component counter
   ```

   This command will create the necessary files for the Counter component, including the component class, template, and styles.

2. Open the `counter.component.ts` file located in the `src/app/counter` directory.

3. Modify the `CounterComponent` class to include the counter logic. Here's an example implementation:

   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-counter',
     templateUrl: './counter.component.html',
     styleUrls: ['./counter.component.css']
   })
   export class CounterComponent {
     counter = 0;

     increment() {
       this.counter++;
     }

     decrement() {
       this.counter--;
     }
   }
   ```

4. Open the `counter.component.html` file located in the `src/app/counter` directory.

5. Update the template to display the counter value and provide buttons for incrementing and decrementing the counter. Here's an example implementation:

   ```html
   <div>
     <h2>Counter: {{ counter }}</h2>
     <button (click)="increment()">Increment</button>
     <button (click)="decrement()">Decrement</button>
   </div>
   ```

## Writing Tests for the Counter Component

Angular provides the Jasmine testing framework for writing unit tests. To write tests for the Counter component, follow these steps:

1. Open the `counter.component.spec.ts` file located in the `src/app/counter` directory.

2. By default, the `CounterComponent` class has a default test case. Remove it.

3. Import the necessary dependencies for testing:

   ```typescript
   import { ComponentFixture, TestBed } from '@angular/core/testing';
   import { CounterComponent } from './counter.component';
   ```

4. Describe the test suite for the Counter component:

   ```typescript
   describe('CounterComponent', () => {
     let component: CounterComponent;
     let fixture: ComponentFixture<CounterComponent>;

     beforeEach(async () => {
       await TestBed.configureTestingModule({
         declarations: [CounterComponent]
       }).compileComponents();
     });

     beforeEach(() => {
       fixture = TestBed.createComponent(CounterComponent);
       component = fixture.componentInstance;
       fixture.detectChanges();
     });

     // Write your tests here
   });
   ```

5. Write your test cases. Here's an example of testing the increment and decrement functionality:

   ```typescript
   it('should increment the counter', () => {
     expect(component.counter).toBe(0);
     component.increment();
     expect(component.counter).toBe(1);
   });

   it('should decrement the counter', () => {
     expect(component.counter).toBe(0);
     component.decrement();
     expect(component.counter).toBe(-1);
   });
   ```

6. Save the file and run the tests by executing the following command:

   ```bash
   ng test
   ```

   This command will run all the tests within your Angular application, including the tests for the Counter component.



**`git push origin testing_angular_application`**