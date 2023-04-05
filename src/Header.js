import React from 'react';
import './App.css';
import 'tachyons';



const Header = () => {
	return (
		<article className="baskerville tc">
		  <header id='banner' className="avenir tc pt1-ns">
		  	<hr className="mh3"/>
		    <h1 id='header-text' className="f2 fw3 tc mb0 dib mh5">The Complete Works of</h1> 
		    <h2><img id="ghibli-logo" style={{ height: '89px', width: '201px' }} class="w-20 dib mb0 mh3" src="https://upload.wikimedia.org/wikipedia/sco/c/ca/Studio_Ghibli_logo.svg" alt="ghibli logo"/></h2>
		    <hr className="mh3 mb2"/>
		  </header>
		</article>
	)
}

export default Header;