import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplateComponent } from './inline-template.component';

describe('InlineTemplateComponent', () => {
  let component: InlineTemplateComponent;
  let fixture: ComponentFixture<InlineTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineTemplateComponent]
    });
    fixture = TestBed.createComponent(InlineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
