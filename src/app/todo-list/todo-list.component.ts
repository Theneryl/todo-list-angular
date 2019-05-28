import {Component, OnInit} from '@angular/core';
import {TodoTaskService} from '../services/todo-task.service';
import { TodoTaskModel } from '../models/todo-task.model';
import { eTodoState } from '../mocks/todo-state.mock';
import { Store } from '@ngrx/store';
import { TodoState } from '../reducers/todo.reducer';
import { TodoGetAll, TodoClose } from '../actions/todo.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoListState$: Observable<TodoTaskModel[]>;

  constructor(private todoTaskService: TodoTaskService,
              private store: Store<TodoState>) {}

  ngOnInit() {
    this.todoListState$ = this.store.select(state => {
      return state['todo'].todoList
    } );
    this.store.dispatch(new TodoGetAll);
  }

  closeTodoTask(id: number) {
    this.store.dispatch(new TodoClose(id));
  }
}