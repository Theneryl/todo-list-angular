import {eTodoState} from '../mocks/todo-state.mock';

let index = 0;

export class TodoTaskModel {
  id: number;
  state: eTodoState;
  title: string;
  description: string;
  create_at: Date;
  started_at: Date;

  constructor(id: number,
              title: string,
              description: string,
              state: eTodoState = eTodoState.TODO) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.create_at = new Date();
    this.state = state;
  }
}
