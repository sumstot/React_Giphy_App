import React from 'react';

const SearchBar = (props) => {
  const { changeGifList } = props;
  const handleChange = (event) => {
    changeGifList(event.currentTarget.value);
  };
  return (
    <input type="text" className="form-search form-control" placeholder="Search for a gif"onChange={handleChange} />
  );
};

export default SearchBar;
