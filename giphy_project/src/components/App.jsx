import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'INSERT HERE',
  https: true
});

const App = () => {
  const [selectedGif, setGifIdSelected] = useState("yYSSBtDgbbRzq");
  const [gifIds, setGifIds] = useState(["TLCJqzNMBjIkl7BXHL", "l2Sq8oTACVkhZ9pE4", "4RnQeOgXXv3na", "U1au7CXDNjRXHDcFY0", "L18eMUGDk3vcwOPUGw", "TfS90uxi84zHpOpfjt", "R6oW8JAJxqRxe", "133cAiXr4T1te", "cOzyUgoJljvhut2G0E"]);

  const changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const newGifIds = res.data.map((gif) => gif.id);
      setGifIds(newGifIds);
    });
  };
  const changeSelectGif = (newSelectedGifId) => {
    setGifIdSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifList={changeGifList} />
        <div className="selected-gif">
          <Gif id={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} changeSelectGif={changeSelectGif} />
      </div>
    </div>
  );
};

export default App;
