import React from 'react';

const Link = ({ linkTitle, linkTarget }) => {
  return (
    <a
      className="text-react-blue"
      href={linkTarget}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkTitle}
    </a>
  );
};

export default Link;
