import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIds, changeSelectGif } = props;
  return (
    <div className="gif-list">
      {gifIds.map((gifId) => <Gif id={gifId} key={gifId} changeSelectGif={changeSelectGif} />)}
    </div>
  );
};

export default GifList;
