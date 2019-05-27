import { Injectable } from '@angular/core';
import {eTodoState} from "../mocks/todo-state.mock";
import {TodoTaskModel} from "../models/todo-task.model";
import {TodoListModel} from "../models/todo-list.model";
import { HttpXhrBackend, HttpRequest, HttpEvent, XhrFactory } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {

  index = 0;
  todoList: TodoTaskModel[];

  constructor() {

    this.todoList = [];
    for (let i = 1; i <= 10; i++) {
      this.saveTodoTask(
        this.createTodoTask(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus pellentesque posuere. Etiam eros elit, imperdiet in ultrices nec, porttitor non elit. Sed tempor laoreet orci. Cras tincidunt dui diam, quis laoreet purus dictum non. Nunc condimentum laoreet nunc sed maximus. Nunc feugiat, turpis ut aliquam venenatis, libero purus congue erat, vel tempor urna neque a tortor. Sed vel scelerisque nulla. Nam congue tellus at viverra pulvinar. Fusce tempus, dolor eu vehicula rhoncus, felis ex porta leo, ut imperdiet erat augue eget nisi. Nam sit amet magna in libero efficitur convallis in et velit. Vestibulum et mauris quis orci dignissim condimentum.'
        )
      );
    }
  }

  createTodoTask(description?: string) : TodoTaskModel{
    return new TodoTaskModel(
      ++this.index,
      'Todo ' + this.index,
      description,
      eTodoState.TODO
    )
  }

  saveTodoTask(todoTask: TodoTaskModel) {
    this.todoList.push(todoTask);
  }

  updateTodoTask(todoTask: TodoTaskModel) {
    /// TODO
    console.log('updateTodoTask');
  }

  closeTodoTask(id: number) {
    /// TODO
      let task = this.todoList.find(task => task.id === id );
      task.state = eTodoState.DONE;
  }

  getTodoTask(id: number) : TodoTaskModel{
    return this.todoList.find(task => task.id.toString() === id.toString());
  }

  getAllTodoTask() {
    return this.todoList;
  }

}
