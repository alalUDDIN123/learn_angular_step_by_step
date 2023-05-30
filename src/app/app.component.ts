import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myStyle = {
    'width': "200px",
    'height': "200px",
    'border': "2px solid black",
    'display': "flex",
    'margin': "10px auto",
    'background-color': "blue"
  }

  myClass = {
    'border': true,
    'main_container': true
  }
  show: boolean = true
  myData=["Ravi Ranjan","Abhijit","Amol"]
  rating:Number=-1;
}
