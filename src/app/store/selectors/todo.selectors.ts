import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from ".."
import {adapter, State, todoFeatureKey} from "../reducers/todo.reducers";

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors()

export const selectData = createFeatureSelector<AppState, State>(todoFeatureKey)
export const selectTodo = createSelector(selectData, selectAll)
export const selectTodoTotal = createSelector(selectData, selectTotal)
