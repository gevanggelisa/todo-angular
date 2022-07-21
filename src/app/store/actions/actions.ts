// Action Creators
export function addTodo(text: string) {
  // returns action object
  return {
    type: 'ADD_TODO',
    payload: { text },
  };
}
export function deleteTodo(id: number) {
  return {
    type: 'DELETE_TODO',
    payload: { id },
  };
}
export function updateToDo(data: object) {
  return {
    type: 'UPDATE_TODO',
    payload: { data },
  };
}
