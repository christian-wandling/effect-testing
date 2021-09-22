import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MyFeatureEffects } from '../store/my-feature.effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jest-marbles';
import { myAction, myOtherAction } from '../store/my-feature.actions';
import { getMyState } from '../store/my-feature.selectors';

import { TestScheduler } from 'rxjs/testing';

describe('MyFeatureEffects', () => {
    let actions$: Observable<any>;
    let effects: MyFeatureEffects;
    let store: MockStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MyFeatureEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    initialState: {
                        myFeature: {
                            myState: false
                        }
                    }
                }),
            ]
        });

        effects = TestBed.inject(MyFeatureEffects);
        store = TestBed.inject(MockStore);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should call myOtherAction with the value from the mock selector', () => {
        store.overrideSelector(getMyState, true);
        store.refreshState();

        actions$ = hot('-a', {a: myAction()});

        const expected = hot('-b', {b: myOtherAction({myState: true})});

        expect(effects.myEffect).toBeObservable(expected);
    });
});

describe('MyFeatureEffectsWithTestScheduler', () => {
    let actions$: Observable<any>;
    let effects: MyFeatureEffects;
    let store: MockStore;
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });

        TestBed.configureTestingModule({
            providers: [
                MyFeatureEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    initialState: {
                        myFeatureState: {
                            myState: false
                        }
                    }
                }),
            ]
        });

        effects = TestBed.inject(MyFeatureEffects);
        store = TestBed.inject(MockStore);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should call myOtherAction with the value from the mock selector', () => {
        store.overrideSelector(getMyState, true);
        store.refreshState();

        testScheduler.run(({ cold, hot, expectObservable }) => {
            actions$ = hot('-a', {a: myAction()});

            expectObservable(effects.myEffect).toBe(
                '-b',
                {b: myOtherAction({myState: true})}
            );
        });






    });
});
