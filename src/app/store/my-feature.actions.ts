import { createAction, props } from '@ngrx/store';

export const myAction = createAction(
    '[MyFeature] My action'
);

export const myOtherAction = createAction(
    '[MyFeature] My other action',
    props<{ myState: boolean }>()
);




