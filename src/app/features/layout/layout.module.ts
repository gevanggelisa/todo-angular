import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [NavbarComponent, LayoutComponent]
})
export class LayoutModule { }
