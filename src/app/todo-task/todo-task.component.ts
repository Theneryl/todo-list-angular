import { Component, OnInit } from '@angular/core';
import { TodoTaskModel } from '../models/todo-task.model';
import {ActivatedRoute} from '@angular/router';
import { TodoTaskService } from '../services/todo-task.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  todoTask: TodoTaskModel;

  todoTaskForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private todoTaskService: TodoTaskService) {
    this.route.params.subscribe( params => {
      this.todoTask = todoTaskService.getTodoTask(params.id);
      if (!this.todoTask) {
        this.todoTask = this.todoTaskService.createTodoTask();
      }

      this.todoTaskForm = new FormGroup({
        title: new FormControl(this.todoTask.title),
        description: new FormControl(this.todoTask.description)
      });
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.todoTaskForm.value);
  }
}
