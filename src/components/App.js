import React, { Component } from 'react';
import '../App.css';
import swLogo from '../images/sw-logo.png';
import falcon from '../images/falcon.png';
import Planet from './Planet';

class App extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // Initial states
    this.state = {
      name: '',
      population: '',
      climate: '',
      terrain: '',
      featured: ''
    }
    // Binding the planetInfo function to this
    this.planetInfo = this.planetInfo.bind(this);
  }

  componentDidMount() {
    this.planetInfo();
  }

  /**
  * @description Fetch The Star Wars API data
  * @param {number} planetNumber
  * @param {template string} url
  * @param {object} response
  * @param {object} planetData
  * @param {object} error
  */
  planetInfo() {
    const planetNumber = Math.floor(Math.random() * 61) + 1;
    const url = `https://swapi.co/api/planets/${planetNumber}`;

    fetch(url)
    .then(response => response.json())
    .then(planetData => {
      this.setState({
        name: planetData.name,
        population: planetData.population,
        climate: planetData.climate,
        terrain: planetData.terrain,
        featured: planetData.films.length
      });
      console.log(this.state.name);
      console.log(this.state.population);
      console.log(this.state.climate);
      console.log(this.state.terrain);
      console.log(this.state.featured);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    
    return (
      <div className='wrapper'>
        <div className='stars'></div>
        <div className='twinkle'></div>
        <header className='header'>
          <div className='header-title'>
            <img className='header-logo' src={ swLogo } alt='Star Wars Logo'/>
            <h1>Colonist</h1>
          </div>
          <p className='header-subtitle'>Are you ready for the journey?</p>
        </header>
        <Planet
          name={ this.state.name }
          population={ this.state.population }
          climate={ this.state.climate }
          terrain={ this.state.terrain }
          featured={ this.state.featured }
        />
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
      </div>
    );
  }
}

export default App;
