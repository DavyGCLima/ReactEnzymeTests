import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../store/ducks/todos';

// import { Container } from './styles';

export default function components() {

  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleAdd() {
    dispatch(Creators.addTodo(todo));
  }

  return (
    <div >
      <ul>{ todos.map((todo, index) => (<li key={index}>{todo}</li>)) }</ul>
      <input type="text" name="todo" onChange={handleChange} />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}
