import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TodoComponent } from './modules/todo-list/todo.component';
import { StoreModule } from '@ngrx/store';
import { myStore } from './store';
import { FormsModule } from '@angular/forms';
// import { NavbarComponent } from './layouts/navbar/navbar.component';
// import { FooterComponent } from './modules/layout/footer/footer.component';
// import { LayoutComponent } from './modules/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    // TodoComponent,
    // NavbarComponent,
    // FooterComponent,
    // LayoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    myStore,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
