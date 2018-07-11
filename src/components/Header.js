import React from 'react';
import swLogo from '../images/sw-logo.png';

const Header = (props) => {

  return(
    <header className='header'>
      <div className='header-title'>
        <img className='header-logo' src={ swLogo } alt='Star Wars Logo'/>
        <h1>Colonist</h1>
      </div>
      <p className='header-subtitle'>Are you ready for the journey?</p>
    </header>
  );
}

export default Header;