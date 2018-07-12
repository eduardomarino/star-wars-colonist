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
    // Binding the functions to this
    this.planetInfo = this.planetInfo.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    this.planetInfo();
  }

  /**
  * @description Play the Millennium Falcon engine
  * @param {object} audio
  */
  playAudio() {
    const audio = document.querySelector('audio');
    audio.play();
  }

  /**
  * @description Fetch The Star Wars API data and call playAudio function
  * @param {object} audio
  * @param {number} planetNumber
  * @param {template string} url
  * @param {object} response
  * @param {object} planetData
  * @param {object} error
  * @param {object} message
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
        featured: planetData.films.length.toString()
      });
    })
    .catch(error => {
      console.log(error);
      const message = document.querySelector('.main');
      message.innerHTML = `<p class="error">Sorry, the planet data can't be loaded. Try later!</p>`;
    });

    this.playAudio();
  }

  render() {

    const {name, population, climate, terrain, featured} = this.state;
    
    return (
      <div className='App' role='application'>
        <div className='stars' role='img' alt='Twinkling stars background'></div>
        <div className='twinkle' role='img' alt='Twinkling stars background'></div>
        <Header />
        <Planet
          name={ name }
          population={ population }
          climate={ climate }
          terrain={ terrain }
          featured={ featured }
        />
        <TravelButton
          planetInfo={ this.planetInfo }
        />
      </div>
    );
  }
}

export default App;
