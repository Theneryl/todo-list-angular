import { eTodoState } from './todo-state';

export class TodoTaskModel {
    state : eTodoState;
    title : string;
    description : string;
    create_at : Date;
    started_at : Date;

    constructor(
        title : string,
        description : string,
        state: eTodoState = eTodoState.TODO
    ) {
        this.title = title;
        this.description = description;
        this.create_at = new Date();
        this.state = state;
    }
}