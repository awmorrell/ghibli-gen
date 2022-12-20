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
import {films} from './films.js';
import 'tachyons';


const FilmCard = ({ film }) => {

    return (
      <MDBCard style={{ maxWidth: '940px', height: '400px' }} className="baskerville">
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage style={{ height: '398px' }} className='fl' src={film.image} alt='...' fluid />
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