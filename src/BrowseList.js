import React from 'react';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {films} from './films.js';

const BrowseList = ({ setSelectedFilm }) => {
  return (
    <select id="drop-box" className="align-center" onChange={e => setSelectedFilm(films[e.target.value])} title="Films">
    	<option selected hidden>Select a film</option>
      {films.map((film, index) => (
      	(index < 22 ?
        	<option key={film.title} value={index}>
          	{film.title}
        	</option>
      	: null)
      ))}
    </select>
  	);
}

export default BrowseList;

