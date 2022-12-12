import React from 'react';

const Gif = (props) => {
  const { id, changeSelectGif } = props;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;
  const handleClick = () => {
    changeSelectGif(id);
  };
  return (
    <img src={url} alt="gif" className="gif" onClick={handleClick} />
  );
};

export default Gif;
