import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MatChipsModule, MatCardModule } from '@angular/material';
import { todoReducer } from '../reducers/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../app-routing.module';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatChipsModule,
        MatCardModule,
        AppRoutingModule,
        StoreModule.forRoot({todo: todoReducer}),
      ],
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
