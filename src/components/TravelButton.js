import React from 'react';
import falcon from '../images/falcon.png';
import spaceship from '../audio/spaceship.wav';

const TravelButton = (props) => {

  return (
    <div className='btn-container'>
      <div className='btn-wrap'>
        <img
          onClick={ props.planetInfo }
          className='btn-image'
          src={ falcon }
          alt='Millenium Falcon'
        />
        <span className='btn-text'>Next planet</span>
      </div>
      <audio className='audio' src={ spaceship } type='audio/wav'>
        <p>Your browser does not support audio.</p>
      </audio>
    </div>
  );
}

export default TravelButton;