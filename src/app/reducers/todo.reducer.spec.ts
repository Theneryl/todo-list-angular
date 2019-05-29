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
    it('should return TodoTaskModel', () => {
        const  initialState  = todoReducer.initialState;
        const action = new fromActions.TodoGetOneSuccess({
            title: 'test',
            description: 'test',
            create_at: new Date(),
            updated_at: new Date(),
            id: 0,
            state: eTodoState.TODO
        });
        const state = todoReducer.todoReducer(undefined, action);
  
        expect(state.todoTask).toBeDefined();
        expect(state.todoTask.title).toEqual('test');
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
        expect(state.todoList[0].title).toEqual('test');
      });
      it('should return TodoTaskModel', () => {
        const  initialState  = todoReducer.initialState;
        const action = new fromActions.TodoCreateSuccess({
            title: 'test',
            description: 'test',
            create_at: new Date(),
            updated_at: new Date(),
            id: 1,
            state: eTodoState.TODO
        });
        const state = todoReducer.todoReducer(undefined, action);
  
        expect(state.todoTask).toBeDefined();
        expect(state.todoTask.title).toEqual('test');
        expect(state.todoList.length).toBe(1);
      });
      it('should return 3 parameter : id:number, title:string, description:string', () => {
        const  initialState  = todoReducer.initialState;
        const action = new fromActions.TodoUpdate(
            2, // id
            'test2', // title
            'test2' // description
        );
        const state = todoReducer.todoReducer({
            description: 'test',
            id: 1,
            title: 'test',
            todoList: [],
            todoTask: null
        }, action);
  
        expect(state.id).toBe(2);
        expect(state.title).toEqual('test2');
        expect(state.description).toEqual('test2');
      });
      it('should return TodoTaskModel', () => {
        const  initialState  = todoReducer.initialState;
        const action = new fromActions.TodoUpdateSuccess({
            title: 'test 2',
            create_at: new Date(),
            description: 'test 2',
            state: eTodoState.TODO,
            id: 2,
            updated_at: new Date()
        });
        const state = todoReducer.todoReducer({
            description: 'test',
            id: 1,
            title: 'test',
            todoList: [],
            todoTask: null
        }, action);
  
        expect(state.todoTask).toBeDefined();
        expect(state.todoTask.id).toBe(2);
        expect(state.todoTask.title).toEqual('test 2');
      });
      it('should return number', () => {
        const  initialState  = todoReducer.initialState;
        const action = new fromActions.TodoCloseSuccess(3);
        const state = todoReducer.todoReducer({
            description: 'test',
            id: 3,
            title: 'test',
            todoList: [
                {
                    title: 'test 2',
                    create_at: new Date(),
                    description: 'test 2',
                    state: eTodoState.TODO,
                    id: 3,
                    updated_at: new Date()
                }          
            ],
            todoTask: null
        }, action);
  
        expect(state.todoList.length).toBe(1);
        expect(state.todoList[0].state).toBe(eTodoState.DONE);
      });
  });