import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMyState } from './store/my-feature.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'effect-testing';

  myState$ = this.store.select(getMyState);

  constructor(
      private readonly store: Store<any>
  ) {
  }
}
