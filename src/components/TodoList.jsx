import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, setTodos, filteredTodos, searchString }) => {
  return (
    <ul className="space-y-4 py-4">
      {filteredTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          searchString={searchString}
        />
      ))}
    </ul>
  );
};

export default TodoList;
