import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo.model';

export const createTodo = createAction('[Todo] Create Todo', props<{ todo: Todo }>());
export const updateTodo = createAction('[Todo] Update Todo', props<{ todo: Todo }>());
export const deleteTodo = createAction('[Todo] Delete Todo', props<{ todoId: string }>());
