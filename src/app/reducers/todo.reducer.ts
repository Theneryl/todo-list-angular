import * as TodoActions from '../actions/todo.action';
import { TodoTaskModel } from '../models/todo-task.model';
import { eTodoState } from '../mocks/todo-state.mock';

export interface TodoState {
    id: number,
    title: string,
    description: string,
    todoTask: TodoTaskModel;
    todoList: TodoTaskModel[];
}

export const initialState: TodoState = {
    id: 0,
    title: '',
    description: '',
    todoTask: null,
    todoList: []
}

export function todoReducer(
    state = initialState,
    action: TodoActions.TodoActionsUnion
) : TodoState {
    switch (action.type) {
        case TodoActions.TodoActionTypes.todoGetOne : {
            return {
                ...state,
                id: action.id
            };
        }
        case TodoActions.TodoActionTypes.todoGetOneSuccess : {
            return {
                ...state,
                todoTask: action.todotask
            };
        }
        case TodoActions.TodoActionTypes.todoGetAll : {
            return {
                ...state
            };
        }
        case TodoActions.TodoActionTypes.todoGetAllSuccess : {
                return {
                ...state,
                todoList: [
                    ...action.todolist    
                ]
            };
        }
        case TodoActions.TodoActionTypes.todoCreate : {
            return {
                ...state,
                title: action.title,
                description: action.description
            }
        }
        case TodoActions.TodoActionTypes.todoCreateSuccess : {
            return {
                ...state,
                todoTask: action.todotask
            }
        }
        case TodoActions.TodoActionTypes.todoUpdate : {
            return {
                ...state,
                id: action.id,
                title: action.title,
                description: action.description
            }
        }
        case TodoActions.TodoActionTypes.todoUpdateSuccess : {
            return {
                ...state,
                todoTask: action.todotask
            }
        }
        default : {
            return state;
        }
    }
}