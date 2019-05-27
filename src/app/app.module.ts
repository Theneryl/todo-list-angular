import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatDividerModule,
  MatChipsModule, MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TodoTaskComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
