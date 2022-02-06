import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <React.Fragment>
      <div id="form-wrapper">
        <form id="form-input">
          <input
            value={inputText}
            onChange={inputTextHandler}
            id="todo-input"
            type="text"
            placeholder="Buy milk and butter"
            autoComplete="off"
            autoFocus
          />
          <button onClick={submitTodoHandler} id="todo-button">
            <i className="fas fa-plus-circle"></i>
          </button>
        </form>
      </div>

      <div id="select-wrapper">
        <div id="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">all</option>
            <option value="completed">completed</option>
            <option value="uncompleted">to be done</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
