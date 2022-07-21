import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo, deleteTodo, updateToDo } from '../../store/actions/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  allToDos: any;
  todoForm !: FormGroup;

  updateId!:any;
  isEnabledEdit :boolean = false;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.subscribe((state: any) => {
      this.allToDos = state.todosReducer;
    })


    this.todoForm = this.fb.group({
      item: ['', Validators.required]
    })
  }

  addNewTodo(text: string) {
    const actionObj = addTodo(text); // action creator
    this.store.dispatch(actionObj);
    // console.log(text[0])
    this.todoForm.reset();
  }

  deleteMyTodo(id: number) {
    const actionObj = deleteTodo(id); // action creator
    this.store.dispatch(actionObj);
  }

  editMyTodo(id: number, text: string) {
    this.todoForm.controls['item'].setValue(text);
    this.updateId = id;
    this.isEnabledEdit = true;
  }

  updateMyTodo() {
    const actionObj = updateToDo({
      text: this.todoForm.value.item,
      id: this.updateId
    }); // action creator
    this.store.dispatch(actionObj);

    this.todoForm.reset();
    this.updateId = undefined;
    this.isEnabledEdit = false;
  }
}
