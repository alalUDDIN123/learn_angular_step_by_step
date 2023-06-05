import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { CounterState } from './CounterState';

export const initialState: CounterState = {
    countValue: 0
};

export const counterReducer = createReducer(
    initialState,
    on(increment, state => ({ ...state, countValue: state.countValue + 1 })),
    on(decrement, state => ({ ...state, countValue: state.countValue - 1 })),
    on(reset, state => ({ ...state, countValue: 0 }))
);
