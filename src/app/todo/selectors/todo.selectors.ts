import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../reducers/todo.reducer';

// Selects the TodoState from the Redux store using the feature key 'allTodos'
export const selectTodoState = createFeatureSelector<TodoState>('allTodos');


// Selects the 'alltodos' property from the TodoState
// 'alltodos' is declared inside todo.reducer's initialState object
export const selectTodos = createSelector(
  selectTodoState,
  (state) => state.alltodos
);