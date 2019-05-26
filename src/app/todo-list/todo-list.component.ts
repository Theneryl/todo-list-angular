import { Component, OnInit } from '@angular/core';
import { TodoTaskModel, eTodoState } from '../models/todo-task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoListTodo : TodoTaskModel[];
  todoListDoing : TodoTaskModel[];
  todoListDone : TodoTaskModel[];

  constructor() {}

  ngOnInit() {
    this.todoListTodo = [];

    for (let i = 1; i <= 10; i++) {
      this.todoListTodo.push(
        new TodoTaskModel(
          'todo ' + i,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus pellentesque posuere. Etiam eros elit, imperdiet in ultrices nec, porttitor non elit. Sed tempor laoreet orci. Cras tincidunt dui diam, quis laoreet purus dictum non. Nunc condimentum laoreet nunc sed maximus. Nunc feugiat, turpis ut aliquam venenatis, libero purus congue erat, vel tempor urna neque a tortor. Sed vel scelerisque nulla. Nam congue tellus at viverra pulvinar. Fusce tempus, dolor eu vehicula rhoncus, felis ex porta leo, ut imperdiet erat augue eget nisi. Nam sit amet magna in libero efficitur convallis in et velit. Vestibulum et mauris quis orci dignissim condimentum.'
        )
      );
    }


    this.todoListDoing = [];

    for (let i = 11; i <= 15; i++) {
      this.todoListDoing.push(
        new TodoTaskModel(
          'todo ' + i,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus pellentesque posuere. Etiam eros elit, imperdiet in ultrices nec, porttitor non elit. Sed tempor laoreet orci. Cras tincidunt dui diam, quis laoreet purus dictum non. Nunc condimentum laoreet nunc sed maximus. Nunc feugiat, turpis ut aliquam venenatis, libero purus congue erat, vel tempor urna neque a tortor. Sed vel scelerisque nulla. Nam congue tellus at viverra pulvinar. Fusce tempus, dolor eu vehicula rhoncus, felis ex porta leo, ut imperdiet erat augue eget nisi. Nam sit amet magna in libero efficitur convallis in et velit. Vestibulum et mauris quis orci dignissim condimentum.',
          eTodoState.ON_DOING
        )
      );
    }


    this.todoListDone = [];

    for (let i = 16; i <= 20; i++) {
      this.todoListDone.push(
        new TodoTaskModel(
          'todo ' + i,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus pellentesque posuere. Etiam eros elit, imperdiet in ultrices nec, porttitor non elit. Sed tempor laoreet orci. Cras tincidunt dui diam, quis laoreet purus dictum non. Nunc condimentum laoreet nunc sed maximus. Nunc feugiat, turpis ut aliquam venenatis, libero purus congue erat, vel tempor urna neque a tortor. Sed vel scelerisque nulla. Nam congue tellus at viverra pulvinar. Fusce tempus, dolor eu vehicula rhoncus, felis ex porta leo, ut imperdiet erat augue eget nisi. Nam sit amet magna in libero efficitur convallis in et velit. Vestibulum et mauris quis orci dignissim condimentum.',
          eTodoState.DONE
        )
      );
    }
  }

}
