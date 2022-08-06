import { Action, createReducer, on } from '@ngrx/store';
import {addTodo, deleteTodo, updateTodo} from "../actions/todo.actions";
import {v4 as uuidv4} from "uuid";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export const todoFeatureKey = 'todo';

export interface Todo{
  id: string,
  title: string,
  description: string,
  date: Date,
  status: string,
}

export interface State extends EntityState<Todo>{}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>()

export const initialState: State = adapter.getInitialState()

export const reducer = createReducer(
  initialState,
  on(addTodo,(state,action) => adapter.addOne({
    id: uuidv4(),
    title: action.title,
    description: action.description,
    date: action.date,
    status: 'todo',
  }, state)),
  on(updateTodo, (state,action) => adapter.updateOne({ id: action.id, changes: { status: action.status }}, state)),
  on(deleteTodo,(state,action) => adapter.removeOne(action.id,state)),
);
