import { createSelector } from '@ngrx/store';
import * as MyFeature from './my-feature.reducer'

interface AppState {
    myFeature: MyFeature.State
}

export const selectMyFeatureState = (state: AppState) => state.myFeature;

export const getMyState = createSelector(
    selectMyFeatureState,
    state => state.myState
)
