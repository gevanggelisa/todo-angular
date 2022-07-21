import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
// import { NftComponent } from './pages/nft/nft.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
