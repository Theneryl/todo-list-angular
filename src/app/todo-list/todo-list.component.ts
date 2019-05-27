import {Component, OnInit} from '@angular/core';
import {TodoListModel} from '../models/todo-list.model';
import {TodoTaskService} from '../services/todo-task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoListGroup: TodoListModel[];

  constructor(private todoTaskService: TodoTaskService) {
  }

  ngOnInit() {
    this.todoListGroup = this.todoTaskService.getAllTodoTask();
  }

  deleteTodoTask(id: string) {
    this.todoTaskService.deleteTodoTask(id);
  }
}
