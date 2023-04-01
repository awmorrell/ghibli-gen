import React from 'react';
import 'tachyons';



const Header = () => {
	return (
		<article className="baskerville">
		  <header id='banner' className="avenir tc ph7 pt1-ns">
		  	<hr className="mb1"/>
		    <h1 className="f2 fw3 tc mb0 dib">The Complete Works of <img class="w-30 dib mb0" src="https://upload.wikimedia.org/wikipedia/sco/c/ca/Studio_Ghibli_logo.svg" alt="ghibli logo"/></h1>
		    <hr className="mb1"/>
		  </header>
		</article>
	)
}

export default Header;