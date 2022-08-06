import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store";
import {NgForm} from "@angular/forms";
import {addTodo, deleteTodo} from "../../store/actions/todo.actions";
import {Todo} from "../../store/reducers/todo.reducers";
import {selectTodo, selectTodoTotal} from "../../store/selectors/todo.selectors";
import {filter, Observable} from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>
  todoTotal: Observable<number>
  constructor(private store: Store<AppState>) {
    this.todos = this.store.pipe(select(selectTodo))
    this.todoTotal = this.store.pipe(select(selectTodoTotal))
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.store.dispatch(addTodo({
      title: form.value.title,
      description: form.value.description,
      date: form.value.date,
    })
  )}
}
