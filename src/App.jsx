import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () =>
    localStorage.setItem('todos', JSON.stringify(todos));

  const getLocalTodos = () => {
    localStorage.getItem('todos') === null
      ? localStorage.setItem('todos', JSON.stringify([]))
      : setTodos(JSON.parse(localStorage.getItem('todos')));
  };

  return (
    <div id="content">
      <div id="container" className="self-center rounded-xl">
        <h1>feito.</h1>
        <div id="todo-container">
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
