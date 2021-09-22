import { createReducer } from '@ngrx/store';

export interface State {
    myState: boolean
}

export const initialState: State = {
    myState: false
};


export const reducer = createReducer(
    initialState,
);

