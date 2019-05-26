import { Component, OnInit } from '@angular/core';
import { TodoTaskModel } from '../models/todo-task.model';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  private todo: TodoTaskModel;

  constructor() { }

  ngOnInit() {
  }

}
