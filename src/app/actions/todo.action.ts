import { Action } from '@ngrx/store';
import { TodoTaskModel } from '../models/todo-task.model';
 
export enum TodoActionTypes {
    todoGetOne = '[Todo] Get One',
    todoGetOneSuccess = '[Todo] Get One Success',

    todoGetAll = '[Todo] Get All',
    todoGetAllSuccess = '[Todo] Get All Success',

    todoCreate = '[Todo] Create',
    todoCreateSuccess = '[Todo] Create Success',

    todoUpdate = '[Todo] Update',
    todoUpdateSuccess = '[Todo] Update Success'
}
 
export class TodoGetOne implements Action {
    readonly type = TodoActionTypes.todoGetOne;
   
    constructor(public id: number) {}
  }
  
export class TodoGetOneSuccess implements Action {
    readonly type = TodoActionTypes.todoGetOneSuccess;

    constructor(public todotask: TodoTaskModel) {}
}

export class TodoGetAll implements Action {
    readonly type = TodoActionTypes.todoGetAll;
}
 
export class TodoGetAllSuccess implements Action {
    readonly type = TodoActionTypes.todoGetAllSuccess;

    constructor(public todolist: TodoTaskModel[]){} 
}

export class TodoCreate implements Action {
    readonly type = TodoActionTypes.todoCreate;

    constructor(public title: string, public description: string){}
}
 
export class TodoCreateSuccess implements Action {
    readonly type = TodoActionTypes.todoCreateSuccess;

    constructor(public todotask: TodoTaskModel){}
}

export class TodoUpdate implements Action {
    readonly type = TodoActionTypes.todoUpdate;

    constructor(public id: number, public title: string, public description: string){}
}
 
export class TodoUpdateSuccess implements Action {
    readonly type = TodoActionTypes.todoUpdateSuccess;

    constructor(public todotask: TodoTaskModel){}
}

export type TodoActionsUnion = TodoGetOne | TodoGetOneSuccess | 
                                TodoGetAll | TodoGetAllSuccess |
                                TodoCreate | TodoCreateSuccess |
                                TodoUpdate | TodoUpdateSuccess;