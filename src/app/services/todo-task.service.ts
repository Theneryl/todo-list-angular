import { Injectable } from '@angular/core';
import {eTodoState} from "../mocks/todo-state.mock";
import {TodoTaskModel} from "../models/todo-task.model";
import {TodoListModel} from "../models/todo-list.model";
import { HttpXhrBackend, HttpRequest, HttpEvent, XhrFactory } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoState } from '../reducers/todo.reducer';
import { TodoGetAll } from '../actions/todo.action';

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {

  index = 0;
  todoList: TodoTaskModel[];

  constructor(private store: Store<TodoState>) {

    this.todoList = [];
    for (let i = 1; i <= 10; i++) {
      this.createTodoTask(
        'Todo' + i,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus pellentesque posuere. Etiam eros elit, imperdiet in ultrices nec, porttitor non elit. Sed tempor laoreet orci. Cras tincidunt dui diam, quis laoreet purus dictum non. Nunc condimentum laoreet nunc sed maximus. Nunc feugiat, turpis ut aliquam venenatis, libero purus congue erat, vel tempor urna neque a tortor. Sed vel scelerisque nulla. Nam congue tellus at viverra pulvinar. Fusce tempus, dolor eu vehicula rhoncus, felis ex porta leo, ut imperdiet erat augue eget nisi. Nam sit amet magna in libero efficitur convallis in et velit. Vestibulum et mauris quis orci dignissim condimentum.'
      );
    }
  }

  createTodoTask(title: string, description: string) : TodoTaskModel{
    let todotask = new TodoTaskModel(
      ++this.index,
      title,
      description,
      eTodoState.TODO
    )
    this.todoList.push(todotask);
    this.store.dispatch(new TodoGetAll);
    return todotask;
  }

  updateTodoTask(id:number, title: string, description: string) : TodoTaskModel {
    let task = this.todoList.find(task => task.id.toString() === id.toString());
    if (task) {
      task.title = title;
      task.description = description;
      task.updated_at = new Date();
      this.store.dispatch(new TodoGetAll);
    }
    return task;
  }

  closeTodoTask(id: number) {
      let task = this.todoList.find(task => task.id === id );
      task.state = eTodoState.DONE;
      this.store.dispatch(new TodoGetAll);
    }

  getTodoTask(id: number) : TodoTaskModel{
    return this.todoList.find(task => task.id.toString() === id.toString());
  }

  getAllTodoTask() {
    return this.todoList
    .sort((task1, task2) => task1.create_at > task2.create_at ? 1 : -1)
    .sort(task => task.state === eTodoState.TODO ? -1 : 1);
  }

}
