import * as todoReducer from "./todo.reducer";
import * as fromActions from '../actions/todo.action';
import { eTodoState } from '../mocks/todo-state.mock';

describe('TodoReducer', () => {
    it('should return the default state', () => {
    const  initialState  = todoReducer.initialState;
    const action = new fromActions.TodoGetAll;
    const state = todoReducer.todoReducer(undefined, action);

    expect(state).toEqual(initialState);
    });
    it('should return TodoTaskModel Array', () => {
        const  initialState  = todoReducer.initialState;
        const action = new fromActions.TodoGetAllSuccess([{
            title: 'test',
            description: 'test',
            create_at: new Date(),
            updated_at: new Date(),
            id: 0,
            state: eTodoState.TODO
        }]);
        const state = todoReducer.todoReducer(undefined, action);
  
        expect(state.todoList.length).toBe(1);
        expect(state.todoList[0].title).toBe('test');
      });
  });