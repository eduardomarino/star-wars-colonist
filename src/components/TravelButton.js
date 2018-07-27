import React, { Component } from 'react';
import PropTypes from 'prop-types';
import falcon from '../assets/images/falcon.png';
import spaceship from '../assets/audios/spaceship.wav';

class TravelButton extends Component {

  /**
  * @description Call props
  */
  shipClicked = () => {
    this.props.planetInfo();
    this.props.playAudio();
  }

  render() {

    const { shipClicked } = this;

    return (
      <div className='bottom-container'>
        <div className='btn'>
          <img
            onClick={ shipClicked }
            onKeyPress={ shipClicked }
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
}

TravelButton.propTypes = {
  planetInfo: PropTypes.func.isRequired,
  playAudio: PropTypes.func.isRequired
}

export default TravelButton;