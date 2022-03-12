import React, { useState, useEffect } from 'react';
import TodoFilter from './components/TodoFilter';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filterStatus]);

  const filterHandler = () => {
    switch (filterStatus) {
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
      className={`flex min-h-full flex-col justify-between bg-blue-dark px-6 py-8 font-spartan font-light text-white`}
    >
      <div>
        <TodoSearch
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <h1 className="pt-8 pb-4 text-2xl">
          {new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
          })}
        </h1>
        <TodoFilter setFilterStatus={setFilterStatus} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          searchString={searchString}
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
