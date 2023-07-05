import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './todo/todo.model';
import { createTodo, updateTodo, deleteTodo } from './todo/actions/todo.actions';
import { selectTodos } from './todo/selectors/todo.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "Learn angular step by step";
  todos$!: Observable<Todo[]>; // Added the non-null assertion operator

  newTodoTitle = '';
  newTodoDescription = '';
  selectedTodo: Todo | null = null; // Updated the type to allow null

  constructor(private store: Store) {}

  ngOnInit() {
    this.todos$ = this.store.select(selectTodos);
  }

  addTodo() {
    const newTodo: Todo = {
      id: this.generateUniqueId(),
      title: this.newTodoTitle,
      description: this.newTodoDescription,
      completed: false
    };

    this.store.dispatch(createTodo({ todo: newTodo }));

    this.newTodoTitle = '';
    this.newTodoDescription = '';
  }

  updateTodoForm(todo: Todo) {
    this.selectedTodo = { ...todo };
  }

  updateTodo() {
    if (this.selectedTodo) {
      this.store.dispatch(updateTodo({ todo: this.selectedTodo }));
      this.selectedTodo = null;
    }
  }
  

  deleteTodoById(todoId: string) {
    this.store.dispatch(deleteTodo({ todoId }));
  }

  private generateUniqueId(): string {
    return new Date().getTime().toString();
  }
}
