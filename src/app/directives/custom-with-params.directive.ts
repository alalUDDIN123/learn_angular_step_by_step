import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomWithParams]'
})
export class CustomWithParamsDirective {
  @Input() highlightColor!: string;

  constructor(
    private element: ElementRef
  ) { }

  // ngOnInit(): void {
  //   let NativeElement = this.element.nativeElement;
  //   let btn = NativeElement.querySelector('button')
  //   if (btn) {
  //     btn.style.color = this.highlightColor
  //   }
  // }

  private isHighlighted: boolean = false;


  @HostListener('click') onClick() {
    this.isHighlighted = !this.isHighlighted;
    this.highlight();
  }

  private highlight() {
    const buttonElement = this.element.nativeElement.querySelector('button');
    if (buttonElement) {
      buttonElement.style.backgroundColor = this.isHighlighted ? this.highlightColor : '';
    }
  }
}


