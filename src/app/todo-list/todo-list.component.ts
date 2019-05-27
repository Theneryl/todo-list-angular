import {Component, OnInit} from '@angular/core';
import {TodoTaskService} from '../services/todo-task.service';
import { TodoTaskModel } from '../models/todo-task.model';
import { eTodoState } from '../mocks/todo-state.mock';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: TodoTaskModel[];

  get list() {
    this.todoList.reverse();
    return this.todoList.sort(task => task.state === eTodoState.TODO ? -1 : 1);
  }

  constructor(private todoTaskService: TodoTaskService) {
  }

  ngOnInit() {
    this.todoList = this.todoTaskService.getAllTodoTask();
  }

  closeTodoTask(id: number) {
    this.todoTaskService.closeTodoTask(id);
  }
}