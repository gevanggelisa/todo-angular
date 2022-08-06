import { Component, OnInit, Input } from '@angular/core';
import {Todo} from "../../../../store/reducers/todo.reducers";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../store";
import {selectTodo} from "../../../../store/selectors/todo.selectors";
import { updateTodo, deleteTodo } from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  todos: Observable<Todo[]>
  @Input() item = {
    title: '',
    description: '',
    date: new Date(),
    id: '',
  };

  @Input() status = ''

  @Input() displayCheck = true

  constructor(private store: Store<AppState>) {
    this.todos = this.store.pipe(select(selectTodo))
  }

  ngOnInit(): void {
  }

  checkListTodo() {
    this.store.dispatch(updateTodo({ id: this.item.id, status: this.status}))
  }

  deleteTodo(id:string){
    this.store.dispatch(deleteTodo({id: id}) )
  }
}
