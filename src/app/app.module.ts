import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/my-feature.reducer';
import { MyFeatureEffects } from './store/my-feature.effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({myFeature: reducer}),
        EffectsModule.forRoot([MyFeatureEffects]),
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
