import {Component, OnInit} from '@angular/core';
import {TodoTaskService} from '../services/todo-task.service';
import { TodoTaskModel } from '../models/todo-task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: TodoTaskModel[];

  constructor(private todoTaskService: TodoTaskService) {
  }

  ngOnInit() {
    this.todoList = this.todoTaskService.getAllTodoTask();
  }

  deleteTodoTask(id: number) {
    this.todoTaskService.deleteTodoTask(id);
  }
}