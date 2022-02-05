import React from 'react';

const Button = ({ count, onClick }) => {
  return (
    <button
      className="py rounded border border-[rgb(118,118,118)] bg-[#EFEFEF] px-2 text-[calc(10px+2vmin)] leading-snug text-black"
      type="button"
      onClick={onClick}
    >
      count is: {count}
    </button>
  );
};

export default Button;
