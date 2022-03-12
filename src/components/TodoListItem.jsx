import React from 'react';
import {
  CheckCircle,
  RadioButtonUnchecked,
  RemoveCircle,
} from '@mui/icons-material';
import Highlighter from 'react-highlight-words';

const TodoListItem = ({ todo, todos, setTodos, searchString }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const toggleTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        return item.id === todo.id
          ? { ...item, completed: !item.completed }
          : item;
      })
    );
  };

  return (
    <li className="flex justify-between rounded-lg bg-blue-light px-6 py-5">
      <div
        className={`flex items-center space-x-4 ${
          todo.completed && 'opacity-20'
        }`}
      >
        <button onClick={toggleTodoHandler}>
          {todo.completed ? (
            <CheckCircle className="text-green-400" />
          ) : (
            <RadioButtonUnchecked />
          )}
        </button>
        <Highlighter
          highlightClassName="py-1 bg-yellow-300"
          searchWords={[searchString]}
          autoEscape={true}
          textToHighlight={todo.text}
        />
      </div>
      <button onClick={deleteTodoHandler} type="button">
        <RemoveCircle className="text-red-400" />
      </button>
    </li>
  );
};

export default TodoListItem;
