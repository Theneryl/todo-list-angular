import { Component, OnInit } from '@angular/core';
import { TodoTaskModel } from '../models/todo-task.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  private todo: TodoTaskModel;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params));
  }

  ngOnInit() {
  }

}
