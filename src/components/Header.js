import React from 'react'
import swLogo from '../assets/images/sw-logo.png'

const Header = () => (
  <header className='header'>
    <div className='header__title'>
      <img className='header__logo' src={swLogo} alt='Star Wars Logo' />
      <h1>Colonist</h1>
    </div>
    <p className='header__subtitle'>Are you ready for the journey?</p>
  </header>
)

export default Header
