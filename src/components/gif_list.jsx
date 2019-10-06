import React from 'react';

import Gif from './gif';

const GifList = (props) => {
  const renderList = () => {
    return (
      props.gifs.map(gif => <Gif gifId={gif.id} key={gif.id} stateFunction={props.stateFunction} />)
    );
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};
export default GifList;
