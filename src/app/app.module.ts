import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './components/libro/libro.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddLibroComponent } from './components/libro/add-libro.component';
import { EditLibroComponent } from './components/libro/edit-libro.component';
@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    AddLibroComponent,
    EditLibroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
