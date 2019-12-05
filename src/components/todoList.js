import React, { useState } from 'react';

// import { Container } from './styles';

export default function components() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleAdd() {
    setTodoList([...todoList, todo]);
  }

  return (
    <div >
      <ul>{ todoList.map((todo, index) => (<li key={index}>{todo}</li>)) }</ul>
      <input type="text" name="todo" onChange={handleChange} />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}
