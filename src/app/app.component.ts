import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typeText = '';
  rangeValue = 16;
  textColor = '';

  getValue(event: any) {
    this.typeText = event.target.value;
  }

  getRange(event: any) {
    this.rangeValue = event.target.value;
  }

  fontSizeSet(action: string) {
    if (action === 'inc') {
      this.rangeValue++;
    } else if (action === 'dec') {
      this.rangeValue--;
    }
  }

  setColor(event: any) {
    this.textColor = event.target.value;
  }


}




