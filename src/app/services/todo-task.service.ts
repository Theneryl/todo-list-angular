import { Injectable } from '@angular/core';
import {eTodoState} from "../mocks/todo-state.mock";
import {TodoTaskModel} from "../models/todo-task.model";
import {TodoListModel} from "../models/todo-list.model";

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {

  todoListGroup: TodoListModel[];

  constructor() {
    this.todoListGroup = [
      new TodoListModel('To Do', eTodoState.TODO),
      new TodoListModel('Doing', eTodoState.ON_DOING),
      new TodoListModel('Done', eTodoState.DONE),
    ];

    this.todoListGroup.forEach(list => {
      for (let i = 1; i <= 10; i++) {
        list.todoList.push(
          new TodoTaskModel(
            list.title + ' ' + i,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus pellentesque posuere. Etiam eros elit, imperdiet in ultrices nec, porttitor non elit. Sed tempor laoreet orci. Cras tincidunt dui diam, quis laoreet purus dictum non. Nunc condimentum laoreet nunc sed maximus. Nunc feugiat, turpis ut aliquam venenatis, libero purus congue erat, vel tempor urna neque a tortor. Sed vel scelerisque nulla. Nam congue tellus at viverra pulvinar. Fusce tempus, dolor eu vehicula rhoncus, felis ex porta leo, ut imperdiet erat augue eget nisi. Nam sit amet magna in libero efficitur convallis in et velit. Vestibulum et mauris quis orci dignissim condimentum.',
            list.state
          )
        );
      }
    });
  }

  createTodoTssk(todoTask: TodoTaskModel) {
    /// TODO
    console.log('createTodoTssk');
  }

  updateTodoTask(todoTask: TodoTaskModel) {
    /// TODO
    console.log('updateTodoTask');
  }

  deleteTodoTask(id: string) {
    /// TODO
    console.log('deleteTodoTask');
  }

  getTodoTask(id: string) {
    /// TODO
    console.log('getTodoTask');
  }

  getAllTodoTask() {
    return this.todoListGroup;
  }

}
