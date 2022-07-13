import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../model/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm !: FormGroup;
  tasks: ITask [] = [];

  updateId!:any;
  isEnabledEdit :boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required]
    })
  }

  addTask(){
    this.tasks.push({
      description: this.todoForm.value.item,
    })
    this.todoForm.reset();
  }

  deleteTask(i: number){
    this.tasks.splice(i,1)
  }

  editTask(item:ITask, i: number){
    this.todoForm.controls['item'].setValue(item.description);
    this.updateId = i;
    this.isEnabledEdit = true;
  }

  removeList() {
    this.tasks = [];
  }

  updateTask(){
    this.tasks[this.updateId].description = this.todoForm.value.item;
    this.todoForm.reset();
    this.updateId = undefined;
    this.isEnabledEdit = false;
  }

}
