import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ItemComponent } from './components/item/item.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemComponent,
    TodoComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [TodoComponent],
})
export class TodoModule { }
