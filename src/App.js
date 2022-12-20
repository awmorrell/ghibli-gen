import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import {films} from './films.js';
import HomeCard from './HomeCard.js';
import FilmCard from './FilmCard.js';
import Scroll from './Scroll.js';
import BrowseList from './BrowseList.js';

function App() {
  const [selectedFilm, setSelectedFilm] = React.useState(films[22]);

    return (
      <div className="App">
        <Header />
        <BrowseList setSelectedFilm={ setSelectedFilm }/>
          <Scroll>
            <div className="d-flex justify-content-center mb0">
              <FilmCard film={ selectedFilm } />
            </div>
          </Scroll>
      </div>
    );
}

export default App;
