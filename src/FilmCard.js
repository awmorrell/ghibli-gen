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
import './App.css';
import 'tachyons';


const FilmCard = ({ film }) => {

    return (
      <MDBCard style={{ maxWidth: '940px', height: '400px' }} className="baskerville tc">
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage id='film-image' style={{ height: '398px', width: '350px' }} className='fl' src={film.image} alt='...' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>{film.title}</MDBCardTitle>
              <hr/>
              <MDBCardText>
                {film.description}
              </MDBCardText>
              { film.title !== "Welcome!"
                ? <MDBCardText>
                    <small className='text-muted'>
                    Year of release: {film.release_date}
                    </small>
                  </MDBCardText>
                : null
              }
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    );
}

export default FilmCard;