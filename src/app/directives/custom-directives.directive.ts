import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective {

  constructor(
    private element: ElementRef
  ) {
    this.element.nativeElement.style.color = "red";
  }

}
