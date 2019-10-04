import React from 'react';

const Gif = (props) => {
  const { gifId } = props;
  const src = `https://media0.giphy.com/media/${gifId}/200.gif`;
  return (
    <img src={src} alt="" className="gif" />
  );
};

export default Gif;
