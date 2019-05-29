import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskComponent } from './todo-task.component';
import { MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatChip, MatChipsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { todoReducer } from '../reducers/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoTaskComponent', () => {
  let component: TodoTaskComponent;
  let fixture: ComponentFixture<TodoTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatChipsModule,
        StoreModule.forRoot({todo: todoReducer}),
      ],
      declarations: [ TodoTaskComponent, TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
