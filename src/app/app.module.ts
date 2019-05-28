import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatDividerModule,
  MatChipsModule, MatIconModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects'

@NgModule({
  declarations: [
    AppComponent,
    TodoTaskComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({todo: todoReducer}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
