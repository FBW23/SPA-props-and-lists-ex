import React from 'react';
import albums from '../data/gorillaz/gorillaz.js';
import Album from './Album';

class App extends React.Component {
  render() {
    let gorillazAlbums = albums.results.albummatches.album;
    let albumsList = gorillazAlbums.map((el) => {
      if (el.image[2]['#text']) return <Album key={el.url} data={el}></Album>;
    });

    return <div className="app">{albumsList}</div>;
  }
}

export default App;
