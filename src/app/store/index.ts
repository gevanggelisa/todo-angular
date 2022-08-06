import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodo from './reducers/todo.reducers';
import * as fromRouter from "@ngrx/router-store"
export interface AppState {

  [fromTodo.todoFeatureKey]: fromTodo.State;
  [fromTodo.todoFeatureKey]: fromTodo.State;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromTodo.todoFeatureKey]: fromTodo.reducer,
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
  router: fromRouter.routerReducer
};


function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {

  return function (state, action) {
    // console.log('state',state)
    let res = reducer(state,action)
    // console.log('res',res)
    // console.log('action',action)
    return res
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
