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
                    .sort((task1, task2) => task1.create_at > task2.create_at ? 1 : -1)
                    .sort(task => task.state === eTodoState.TODO ? -1 : 1)
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
                todoTask: action.todotask,
                todoList: [
                    ...state.todoList,
                    action.todotask
                ]
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
        case TodoActions.TodoActionTypes.todoClose : {
            return {
                ...state,
                id: action.id
            }
        }
        case TodoActions.TodoActionTypes.todoCloseSuccess : {
            let task = state.todoList.find(task => task.id === action.id );
            task.state = eTodoState.DONE;
            
            return {
                ...state,
                todoList: [
                    ...state.todoList
                    .sort((task1, task2) => task1.create_at > task2.create_at ? 1 : -1)
                    .sort(task => task.state === eTodoState.TODO ? -1 : 1)
                ]
            }
        }
        default : {
            return state;
        }
    }
}