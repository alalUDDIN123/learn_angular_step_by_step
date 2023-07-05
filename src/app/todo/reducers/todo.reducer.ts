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
  on(createTodo, (state, { todo }) => {
    // console.log('State before createTodo:', state);
    // console.log('Todo to be added:', todo);
    const newState = {
      ...state,
      todos: [...state.todos, todo],
    };
    // console.log('State after createTodo:', newState);
    return newState;
  }),
  on(updateTodo, (state, { todo }) => {
    // console.log('State before updateTodo:', state);
    // console.log('Updated Todo:', todo);
    const newState = {
      ...state,
      todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
    };
    // console.log('State after updateTodo:', newState);
    return newState;
  }),
  on(deleteTodo, (state, { todoId }) => {
    // console.log('State before deleteTodo:', state);
    // console.log('Todo ID to be deleted:', todoId);
    const newState = {
      ...state,
      todos: state.todos.filter((t) => t.id !== todoId),
    };
    // console.log('State after deleteTodo:', newState);
    return newState;
  })
);

