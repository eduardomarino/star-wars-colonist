import React from 'react';
import falcon from '../images/falcon.png';

const TravelButton = (props) => {

  return (
    <div className='btn-container'>
      <div className='btn-wrap'>
        <img
          onClick={ this.planetInfo }
          className='btn-image'
          src={ falcon }
          alt='Millenium Falcon'
        />
        <span className='btn-text'>Next planet</span>
      </div>
    </div>
  );
}

export default TravelButton;