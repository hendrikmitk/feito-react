import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div id="todo-list-container">
      <ul id="todo-list">
        {filteredTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
