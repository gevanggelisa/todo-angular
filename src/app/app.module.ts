import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TodoComponent } from './modules/todo-list/todo.component';
import { StoreModule } from '@ngrx/store';
// import { myStore } from './store';
import { FormsModule } from '@angular/forms';
import { reducers, metaReducers } from './store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './services/core.module';
import { HttpClientModule } from '@angular/common/http';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    // SharedModule.forRoot(),
    FormsModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
