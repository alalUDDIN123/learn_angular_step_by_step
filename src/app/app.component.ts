import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align: center;">
      <h1>{{ title }}</h1>
      <p>========================= Property Binding Start =========================</p>
      <h3 [innerText]="innerText"></h3>
      <h3 [innerText]="title"></h3>
      <p>========================= Property Binding End =========================</p>

      <p>=================================================================</p>
      <p> =================== Attribute binding start ================</p>

      <p> =================== Attribute binding end ================</p>

      <p>========================= Style Binding start=========================</p>
      <p [style.font-size]="fontSize">I am a Style binding example one without condition</p>
      <p [ngStyle]="{ color: num > 0 ? 'blue' : 'red' }">I am a style binding example two with condition</p>

      <p>========================= ngStyle Binding start=========================</p>
      <p [ngStyle]="getDynamicStyles()">I am a ngStyle binding example with dynamic styles</p>

      <p> =================== Style binding End ================</p>

      <p>--------------------------------------------------------------------------------</p>
    </div>
  `
})
export class AppComponent {
  title = 'learning angular';
  innerText: string = 'I am an example of property binding';
  imageUrl: string = 'https://avatars.githubusercontent.com/u/103570261?s=48&v=4';
  isDisabled: boolean = true;
  blueColor: string = 'blueText';
  num: number = -4;
  fontSize: string = '20px';

  getDynamicStyles(): any {
    return {
      'font-size': this.fontSize,
      'color': this.num > 0 ? 'blue' : 'red',
      'background-color': this.isDisabled ? 'gray' : 'white'
    };
  }
}
