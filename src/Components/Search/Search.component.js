import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  console.log(onSearchChange);
  return (
    <div className="pa2">
      <input type="search" placeholder="search characters" onChange={onSearchChange} />
    </div>
  );
};

export default SearchBox;
