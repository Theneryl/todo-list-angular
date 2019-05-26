import { eTodoState } from '../mocks/todo-state.mock';
import { TodoTaskModel } from './todo-task.model';

export class TodoListModel {
    title : string;
    state : eTodoState;
    todoList : TodoTaskModel [];

    constructor(title : string,
                state : eTodoState) {
        this.title = title;
        this.state = state;
        this.todoList = [];
    }
}