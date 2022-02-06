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
    <li className="flex justify-between rounded-lg bg-blue-light px-6 py-5">
      <div
        className={`flex items-center space-x-4 ${
          todo.completed && 'opacity-20'
        }`}
      >
        <button onClick={toggleTodoHandler}>
          <i
            className={`text-xl ${
              todo.completed
                ? 'fas fa-check-circle text-green-400'
                : 'far fa-circle'
            }`}
          ></i>
        </button>
        <span className="inline-block">{todo.text}</span>
      </div>
      <button onClick={deleteTodoHandler} type="button">
        <i className="fas fa-minus-circle text-xl text-red-400"></i>
      </button>
    </li>
  );
};

export default TodoListItem;
