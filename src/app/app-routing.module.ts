import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TodoComponent } from './modules/todo-list/todo.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
