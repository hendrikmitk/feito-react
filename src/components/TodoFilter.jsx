import React from 'react';

const TodoFilter = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <select
      onChange={statusHandler}
      className="w-full rounded-lg border-0 bg-blue-light px-6 py-2 focus:ring-transparent"
    >
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="uncompleted">to be done</option>
    </select>
  );
};

export default TodoFilter;
