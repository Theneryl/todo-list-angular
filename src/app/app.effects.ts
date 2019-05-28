import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { TodoTaskService } from './services/todo-task.service';
import * as TodoActions from './actions/todo.action';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions,
    private todoTaskService: TodoTaskService) {}

  @Effect()
  getAllTodos$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.TodoGetAll>(TodoActions.TodoActionTypes.todoGetAll),
    mergeMap(action => {
      return of(new TodoActions.TodoGetAllSuccess(this.todoTaskService.getAllTodoTask())); 
    })
  );

  @Effect()
  getOneTodo$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.TodoGetOne>(TodoActions.TodoActionTypes.todoGetOne),
    mergeMap(action => {
      return of(new TodoActions.TodoGetOneSuccess(this.todoTaskService.getTodoTask(action.id)));
    })
  );

  @Effect()
  createTodo$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.TodoCreate>(TodoActions.TodoActionTypes.todoCreate),
    mergeMap(action => {
      return of(new TodoActions.TodoCreateSuccess(this.todoTaskService.createTodoTask(action.title, action.description)));
    })
  )
  @Effect()
  updateTodo$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.TodoUpdate>(TodoActions.TodoActionTypes.todoUpdate),
    mergeMap(action => {
      return of(new TodoActions.TodoUpdateSuccess(this.todoTaskService.updateTodoTask(action.id, action.title, action.description)));
    })
  )
  @Effect()
  closeTodo$: Observable<Action> = this.actions$.pipe(
    ofType<TodoActions.TodoClose>(TodoActions.TodoActionTypes.todoClose),
    mergeMap(action => {
      this.todoTaskService.closeTodoTask(action.id);
      return of(new TodoActions.TodoCloseSuccess());
    })
  )
}
