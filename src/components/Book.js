import React from 'react';
import PurchaseButton from './PurchaseButton';

const Book = (props) => {
  let { title, book_image, description, buy_links } = props.data;

  let linksList = buy_links.map((el) => {
    return <PurchaseButton key={el.name} data={el}></PurchaseButton>;
  });

  return (
    <div className="book">
      <div className="cover">
        <img src={book_image} alt="steve"></img>
      </div>
      <div className="info">
        <p>{title}</p>
        <p>{description}</p>
        <div className="links">{linksList}</div>
      </div>
    </div>
  );
};

export default Book;
