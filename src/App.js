import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Planet from './components/Planet';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Planet
          name={ this.state.name }
          population={ this.state.population }
          climate={ this.state.climate }
          terrain={ this.state.terrain }
          featured={ this.state.featured }
        />
      </div>
    );
  }
}

export default App;
