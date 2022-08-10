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
    <div class="flex flex-col w-1/5 h-1/2 shadow-lg items-center rounded-lg bg-gradient-to-r from-slate-300">
      <form #f="ngForm" (submit)="login(f.value)" class="flex flex-col items-center px-16 pt-32">
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
      <div *ngIf=errMsg class="flex items-center bg-red-500 text-white font-semibold px-3 py-1 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>{{ errMsg }}
        </div>
    <div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  email = '';
  pass = '';
  auth$: Observable<AuthState> = this.store.pipe(select('auth'));
  errMsg = ''

  constructor(private store: Store<AppState>) {}

  login(formData: Credentials) {
    const { email, password } = formData;
    const data = {
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password')
    }
    if (data.email === email && data.password === password) {
      this.store.dispatch(AuthActions.login({email, password}));
    } else {
      this.errMsg= 'Email or Password is not correct'
    }
  }
}
