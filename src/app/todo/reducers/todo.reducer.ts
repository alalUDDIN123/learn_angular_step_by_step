import { createReducer, on } from '@ngrx/store';
import { createTodo, updateTodo, deleteTodo } from '../actions/todo.actions';
import { Todo } from '../todo.model';

// Defines the initial data for the 'alltodos' property
const initialData: Todo[] = [
  {
    id: '1',
    title: 'Sample Todo 1',
    description: 'This is an example todo 1.',
  },
  {
    id: '2',
    title: 'Sample Todo 2',
    description: 'This is an example todo 2.',
  },
  {
    id: '3',
    title: 'Sample Todo 3',
    description: 'This is an example todo 3.',
  },
];

export interface TodoState {
  alltodos: Todo[];
}

// Defines the initial state for the TodoState
export const initialState: TodoState = {
  alltodos: initialData,
};

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { todo }) => {
    // console.log('State before createTodo:', state);
    // console.log('Todo to be added:', todo);
    const newState = {
      ...state,
      alltodos: [...state.alltodos, todo],
    };
    // console.log('State after createTodo:', newState);
    return newState;
  }),
  on(updateTodo, (state, { todo }) => {
    // console.log('State before updateTodo:', state);
    // console.log('Updated Todo:', todo);
    const newState = {
      ...state,
      alltodos: state.alltodos.map((t) => (t.id === todo.id ? todo : t)),
    };
    // console.log('State after updateTodo:', newState);
    return newState;
  }),
  on(deleteTodo, (state, { todoId }) => {
    // console.log('State before deleteTodo:', state);
    // console.log('Todo ID to be deleted:', todoId);
    const newState = {
      ...state,
      alltodos: state.alltodos.filter((t) => t.id !== todoId),
    };
    // console.log('State after deleteTodo:', newState);
    return newState;
  })
);

