import { createSelector } from '@ngrx/store';
import { AppState } from '../../services/core.module';
import { ProfileState } from '../reducers/profile.reducers';

export const getProfile = (state: AppState) =>  state.profile;

export const getProfileUser = createSelector(
  getProfile,
  (state: ProfileState) => state.user
);

export const getProfileUserName = createSelector(
  getProfile,
  (state: ProfileState) => state.user.name
);

