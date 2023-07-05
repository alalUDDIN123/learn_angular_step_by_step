import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
});
