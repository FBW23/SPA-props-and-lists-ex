import React from 'react';
import books from '../data/books/books.js';
import BookCategory from './BookCategory';

class App extends React.Component {
  render() {
    let bookCategories = books.results.lists;
    let bookCategoriesList = bookCategories.map((el) => {
      return <BookCategory key={el.list_id} data={el}></BookCategory>;
    });

    return <div className="app">{bookCategoriesList}</div>;
  }
}

export default App;
