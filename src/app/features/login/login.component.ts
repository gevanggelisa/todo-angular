import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Auth, Credentials } from '../../model';
import { AppState } from '../../services';
import * as AuthActions from '../../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from '../../store/reducers/auth.reducers';

@Component({
  selector: 'fb-login',
  template: `
  <div class="h-screen flex justify-center items-center shadow-xl bg-gradient-to-r from-gray-300">
    <form #f="ngForm" (submit)="login(f.value)" class="flex flex-col justify-center shadow-lg items-center px-16 py-32 rounded-lg bg-gradient-to-r from-slate-300">
      <div *ngIf="(auth$ | async)?.error as error" class="alert alert-danger">
        Wrong credentials
      </div>
      <div class="font-bold text-3xl">
        Sign In
      </div>
      <div class="flex flex-col my-4 items-center">
        <div class="my-2">
          <input type="text" class="w-full border h-10 border-gray-300 rounded-sm pl-2 py-3 outline-none focus:border-blue-400" placeholder="Enter your email" [ngModel]="email" name="email" required>
        </div>
        <div class="my-2">
          <input type="password" class="w-full border h-10 border-gray-300 rounded-sm pl-2 py-3 outline-none focus:border-blue-400" placeholder="Enter your password" [ngModel]="pass" name="password" required>
        </div>
        <button class="bg-gray-600 w-1/2 shadow-sm shadow-gray-700 rounded-md py-2 my-3">
          <div class="text-white font-bold">
            Sign In
          </div>
        </button>
      </div>
    </form>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  email = '';
  pass = '';
  auth$: Observable<AuthState> = this.store.pipe(select('auth'));

  constructor(private store: Store<AppState>) {}

  login(formData: Credentials) {
    const { email, password } = formData;
    this.store.dispatch(AuthActions.login({email, password}));
  }
}
