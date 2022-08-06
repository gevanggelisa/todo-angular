import { Component } from '@angular/core';
import * as AuthActions from '../../../store/actions/auth.actions';
import { getProfileUserName } from '../../../store/selectors/profile.selectors';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../services';

@Component({
  selector: '[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username$ = this.store.pipe(select(getProfileUserName));

  constructor(private store: Store<AppState>) {}

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

}
