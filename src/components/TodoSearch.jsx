import React from 'react';
import { Clear, Search } from '@mui/icons-material';

const TodoSearch = ({ searchString, setSearchString }) => {
  const inputSearchHandler = (e) => {
    setSearchString(e.target.value);
  };

  const clearSearchHandler = (e) => {
    e.preventDefault();
    setSearchString('');
  };

  return (
    <form className="relative rounded-lg bg-blue-light text-[#5d5d61]">
      <input
        className="inset-0 w-full rounded-lg border-none bg-transparent px-6 py-2 pl-16 focus:ring-2 focus:ring-green-dark focus:placeholder:text-transparent"
        type="text"
        value={searchString}
        onChange={inputSearchHandler}
        placeholder="Search todo ..."
        autoComplete="off"
      />
      <button
        className="absolute left-6 bottom-1/2 translate-y-1/2"
        onClick={clearSearchHandler}
      >
        {searchString ? <Clear /> : <Search />}
      </button>
    </form>
  );
};

export default TodoSearch;
