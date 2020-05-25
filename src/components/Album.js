import React from 'react';

const Album = (props) => {
  let { name, image, artist } = props.data;
  console.log(props.data);
  return (
    <div className="album">
      <div className="cover">
        <img src={image[2]['#text']}></img>
      </div>
      <div className="info">
        <p>{artist}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Album;
