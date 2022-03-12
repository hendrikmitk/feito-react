import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Add } from '@mui/icons-material';

const TodoInput = ({ inputText, setInputText, todos, setTodos }) => {
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

  return (
    <form className="relative rounded-lg bg-green-dark">
      <input
        className="inset-0 w-full rounded-lg border-none bg-transparent px-6 py-5 pl-16 font-medium placeholder:font-medium placeholder:uppercase placeholder:text-white focus:ring-2 focus:ring-white focus:placeholder:text-transparent"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="Add new task"
        autoComplete="off"
      />
      <button
        className="absolute left-6 bottom-1/2 translate-y-1/2"
        onClick={submitTodoHandler}
      >
        <Add />
      </button>
    </form>
  );
};

export default TodoInput;
