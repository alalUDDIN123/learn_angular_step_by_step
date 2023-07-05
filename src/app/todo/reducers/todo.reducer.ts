import { createReducer, on } from '@ngrx/store';
import { createTodo, updateTodo, deleteTodo } from '../actions/todo.actions';
import { Todo } from '../todo.model';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(updateTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
  })),
  on(deleteTodo, (state, { todoId }) => ({
    ...state,
    todos: state.todos.filter((t) => t.id !== todoId),
  }))
);
