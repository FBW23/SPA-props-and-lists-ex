import React from 'react';

const PurchaseButton = (props) => {
  let { name, url } = props.data;

  return (
    <a href={url} target="_blank">
      {name}
    </a>
  );
};

export default PurchaseButton;
