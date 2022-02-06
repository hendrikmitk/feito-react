import React from 'react';

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
    <div className="todo-list-item">
      <li className={`todo-item ${todo.completed ? 'todo-completed' : ''}`}>
        {todo.text}
      </li>
      <button
        onClick={toggleTodoHandler}
        className="check-button"
        type="button"
      >
        <i className="fas fa-check-circle"></i>
      </button>
      <button
        onClick={deleteTodoHandler}
        className="delete-button"
        type="button"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoListItem;
