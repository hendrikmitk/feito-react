import React from 'react';
import {
  CheckCircle,
  RadioButtonUnchecked,
  RemoveCircle,
} from '@mui/icons-material';

const TodoListItem = ({ todo, todos, setTodos }) => {
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
        <span className="inline-block">{todo.text}</span>
      </div>
      <button onClick={deleteTodoHandler} type="button">
        <RemoveCircle className="text-red-400" />
      </button>
    </li>
  );
};

export default TodoListItem;
