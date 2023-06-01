// import { Directive, ElementRef, OnInit } from '@angular/core';

// @Directive({
//   selector: '[appCustomDirectives]'
// })
// export class CustomDirectivesDirective implements OnInit {

//   constructor(private elementRef: ElementRef) { }

//   ngOnInit(): void {
//     const element = this.elementRef.nativeElement;
//     console.log("wrppaer elements", element);


//     // Check the element tag name and apply specific styles
//     if (element.tagName === 'H1') {
//       element.style.color = 'blue';
//     } else if (element.tagName === 'H2') {
//       element.style.color = 'green';
//     } else if (element.tagName === 'H3') {
//       element.style.color = 'purple';
//     }
//   }
// }


//================== 

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'h3[appCustomDirectives]'
})
export class CustomDirectivesDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    element.style.color = 'blue';
  }
}

