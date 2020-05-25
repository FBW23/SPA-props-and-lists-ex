import React from 'react';
import Book from './Book';

const BookCategory = (props) => {
  let { display_name, list_image } = props.data;
  console.log(props.data);

  let booksList = props.data.books.map((el) => {
    return <Book key={el.primary_isbn13} data={el}></Book>;
  });

  return (
    <div className="category">
      <div className="title">
        <p>{display_name}</p>
        <img src={list_image} alt="steve"></img>
      </div>
      <div className="books">{booksList}</div>
    </div>
  );
};

export default BookCategory;
