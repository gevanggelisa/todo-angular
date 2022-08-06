import { createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducers';
import { AppState } from '../../services/core.module';

export const selectAuth = (state: AppState) =>  state.auth;

export const getToken = createSelector(
  selectAuth,
  (state: AuthState) => state.accessToken
);
