import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineComponent } from './inline.component';

describe('InlineComponent', () => {
  let component: InlineComponent;
  let fixture: ComponentFixture<InlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineComponent]
    });
    fixture = TestBed.createComponent(InlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
