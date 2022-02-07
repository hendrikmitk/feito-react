import React, { useState, useEffect } from 'react';
import TodoFilter from './components/TodoFilter';
import TodoInput from './components/TodoInput';
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
    <div
      className={`bg-blue-dark font-spartan flex min-h-full flex-col justify-between px-6 py-8 font-light text-white`}
    >
      <div>
        <h1 className="pt-8 pb-4 text-2xl">
          {new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
          })}
        </h1>
        <TodoFilter setStatus={setStatus} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
      <TodoInput
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default App;
