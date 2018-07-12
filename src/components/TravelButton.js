import React from 'react';
import PropTypes from 'prop-types';
import falcon from '../images/falcon.png';
import spaceship from '../audio/spaceship.wav';

const TravelButton = (props) => {

  return (
    <div className='bottom-container'>
      <div className='btn'>
        <img
          onClick={ props.planetInfo }
          onKeyPress={ props.planetInfo }
          className='btn__image'
          src={ falcon }
          alt='Millennium Falcon'
          role='button'
          tabIndex='0'
        />
        <span className='btn__text'>Next planet</span>
      </div>
      <audio
        className='audio'
        src={ spaceship }
        type='audio/wav'
        aria-label='Millennium Falcon engine'
      >
        <p>Your browser does not support audio.</p>
      </audio>
    </div>
  );
}

TravelButton.propTypes = {
  planetInfo: PropTypes.func.isRequired
}

export default TravelButton;