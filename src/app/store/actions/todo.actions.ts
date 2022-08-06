import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('addTodo', props<{title:string, description: string, date:Date}>());
export const updateTodo = createAction('updateTodo', props<{id:string, status: string}>());
export const deleteTodo = createAction('deleteTodo', props<{id:string}>());
// export const openDialog = createAction('openDialog');
