import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Planet from './Planet';
import TravelButton from './TravelButton';

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
  * @description Fetch The Star Wars API data and play audio
  * @param {object} audio
  * @param {number} planetNumber
  * @param {template string} url
  * @param {object} response
  * @param {object} planetData
  * @param {object} error
  */
  planetInfo() {
    const audio = document.querySelector('audio');
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
    })
    .catch(error => {
      console.log(error);
    });

    audio.play();
  }

  render() {
    
    return (
      <div className='App' role='application'>
        <div className='stars' role='img' alt='Twinkling stars background'></div>
        <div className='twinkle' role='img' alt='Twinkling stars background'></div>
        <Header />
        <Planet
          name={ this.state.name }
          population={ this.state.population }
          climate={ this.state.climate }
          terrain={ this.state.terrain }
          featured={ this.state.featured }
        />
        <TravelButton
          planetInfo={ this.planetInfo }
        />
      </div>
    );
  }
}

export default App;
