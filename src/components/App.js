import React, { Component } from 'react';
import '../assets/stylesheets/App.css';
import Header from './Header';
import Planet from './Planet';
import TravelButton from './TravelButton';

class App extends Component {

  // Initial states
  state = {
    name: '',
    population: '',
    climate: '',
    terrain: '',
    featured: ''
  }

  componentDidMount() {
    this.planetInfo();
  }

  /**
  * @description Play the Millennium Falcon engine
  * @param {object} audio
  */
  playAudio = () => {
    const audio = document.querySelector('audio');
    audio.play();
  }

  /**
  * @description Fetch The Star Wars API data
  * @param {object} audio
  * @param {number} planetNumber
  * @param {template string} url
  * @param {object} response
  * @param {object} planetData
  * @param {object} error
  * @param {object} message
  */
  planetInfo = () => {
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
  }

  render() {

    const {name, population, climate, terrain, featured} = this.state;
    const { planetInfo, playAudio } = this;
    
    return (
      <div className='App'>
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
          planetInfo={ planetInfo }
          playAudio={ playAudio }
        />
      </div>
    );
  }
}

export default App;
