import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import 'tachyons';

const HomeCard = () => {
	return (
	<div style={{ maxWidth: '940px' }} class="card mb-3 ">
	  <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="card-img-top" alt="Wild Landscape"/>
	  <div class="card-body">
	    <h5 class="card-title">Card title</h5>
	    <p class="card-text">
	      This is a wider card with supporting text below as a natural lead-in to additional
	      content. This content is a little bit longer.
	    </p>
	    <p class="card-text">
	      <small class="text-muted">Last updated 3 mins ago</small>
	    </p>
	  </div>
	</div>
	)
}

export default HomeCard;