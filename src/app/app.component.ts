import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn angular';
  childData: any;
  todo: string[] = []

  sendToChild = {
    name: "I am from parent component"
  };

  getData(value: any) {
    this.childData = value
  }


  holdTodo(value: string) {
    this.todo.push(value)

  }
}
