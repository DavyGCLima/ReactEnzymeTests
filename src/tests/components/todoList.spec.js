import React from 'react';
import { mount } from 'enzyme';

import TodoList from '../../components/todoList';

it('shold render teh list and button', () => {
    const wrapper = mount(<TodoList />);

    expect(wrapper.find("ul").exists()).toBe(true);
    expect(wrapper.find("input[name='todo']").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
});

it('sould be able to add new todo', () => {
    const wrapper = mount(<TodoList />);

    wrapper.find("input[name='todo']").simulate('change', {
        target: { value: 'Build some new feature' }
    })

    wrapper.find('button').simulate('click');

    expect(wrapper.find('ul').contains(<li>Build some new feature</li>)).toBe(true);
});