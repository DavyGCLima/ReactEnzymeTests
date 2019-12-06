import todosReducer, { Creators as TodosActions } from '../../store/ducks/todos';

describe('Todos Reducer', () => {

    it('shold be able to ADD todo', () => {
        const state = todosReducer({ todos: [] }, TodosActions.addTodo('Novo todo'));

        expect(state.todos[0]).toBe("Novo todo");
    });

    it('shold be able complete todo', () => {
        const todos = ['Fazer café'];

        const state = todosReducer({ todos: todos }, TodosActions.completeTodo('Fazer café'));

        expect(state.todos.length).toBe(0);
    });

});