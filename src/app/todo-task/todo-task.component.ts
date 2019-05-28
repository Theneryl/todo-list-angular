import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { TodoTaskService } from '../services/todo-task.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoState } from '../reducers/todo.reducer';
import { TodoGetOne, TodoCreate, TodoUpdate } from '../actions/todo.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit, OnDestroy {

  todoTaskForm: FormGroup;
  isEdition = false;
  id = 0;
  subs = new Subscription();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private todoTaskService: TodoTaskService,
    private store: Store<TodoState>) {}

  ngOnInit() {
    this.clearForm();
    
    this.subs.add(this.store.select(state => {
      return state['todo'].todoTask;
    }).subscribe(todotask => {
      if (todotask) {
        this.isEdition = true;
        this.todoTaskForm = new FormGroup({
          title: new FormControl(todotask.title),
          description: new FormControl(todotask.description)
        });
      }
    }));

    this.subs.add(this.route.params.subscribe( params => {
      if (params.id !== undefined) {
        this.id = params.id;
        this.store.dispatch(new TodoGetOne(params.id));
      }
      else {
        this.clearForm()
      }
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  clearForm() {
    this.isEdition = false;
    this.id = 0;
    this.todoTaskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  onSubmit() {
    if (this.isEdition) {
      this.store.dispatch(new TodoUpdate(
        this.id,
        this.todoTaskForm.value.title,
        this.todoTaskForm.value.description,
      ));
    } else {
      this.store.dispatch(new TodoCreate(
        this.todoTaskForm.value.title,
        this.todoTaskForm.value.description,
      ));
    }
    this.router.navigate(['/todolist']);
  }
}
