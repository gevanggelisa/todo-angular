import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../store";
import {addTodo, deleteTodo} from "../../../../store/actions/todo.actions";
import {selectTodo, selectTodoTotal} from "../../../../store/selectors/todo.selectors";
import {NgForm} from "@angular/forms";
import {Todo} from "../../../../store/reducers/todo.reducers";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  showModal = false;
  todos: Observable<Todo[]>
  todoTotal: Observable<number>

  constructor(private store: Store<AppState>) {
    this.todos = this.store.pipe(select(selectTodo))
    this.todoTotal = this.store.pipe(select(selectTodoTotal))
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

  disableButton(form: NgForm) {
    return form.value.title === '' || form.value.description === '' || form.value.date === ''
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(addTodo({
      title: form.value.title,
      description: form.value.description,
      date: form.value.date,
    }) )
    this.showModal = !this.showModal;
  }

  deleteTodo(id:string){
    this.store.dispatch(deleteTodo({id: id}) )
  }
}
