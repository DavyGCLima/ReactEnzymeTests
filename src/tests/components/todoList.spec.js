import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import TodoList from '../../components/todoList';

import { Creators as TodoActions } from '../../store/ducks/todos';

const mockStore = configureStore();

const INITIAL_STATE = {
    todos: { todos: ['fazer café', 'Estudar React'] },
}
const store = mockStore(INITIAL_STATE);

describe('Teste TodoList component', () => {

    it('shold render the list and button', () => {
        const wrapper = mount(<Provider store={store}><TodoList /></Provider>);

        expect(wrapper.find('li').length).toBe(2);

    });

    it('shold be able to add new todos', () => {
        const wrapper = mount(<Provider store={store}><TodoList /></Provider>);

        wrapper.find("input[name='todo']").simulate('change', {
            target: { value: 'Build some new feature' }
        })

        wrapper.find('button').simulate('click');

        // expect(store.getState().todos.todos).toEqual(['fazer café', 'Estudar React', 'Build some new feature']);
        expect(store.getActions()).toContainEqual(TodoActions.addTodo('Build some new feature'));
    });

});
