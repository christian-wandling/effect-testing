import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";

import { map, tap } from 'rxjs/operators';

import * as MyFeatureActions from './my-feature.actions';
import { getMyState } from './my-feature.selectors';


@Injectable()
export class MyFeatureEffects {
    myEffect = createEffect(() => {
        return this.actions$.pipe(
            ofType(MyFeatureActions.myAction),
            concatLatestFrom(() => this.store.select(getMyState)),
            map(([ _, myState ])  => MyFeatureActions.myOtherAction({ myState }))
        );
    });


    constructor(
        private actions$: Actions,
        private store: Store<any>
    ) {
    }

}
