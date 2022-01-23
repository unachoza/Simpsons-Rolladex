import React from 'react';
import "./Search.styles.css"

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input id="search" type="search" placeholder="search characters" onChange={onSearchChange} />
    </div>
  );
};

export default SearchBox;
