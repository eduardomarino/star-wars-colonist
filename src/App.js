import React, { Component } from 'react'
import './assets/styles/App.css'
import Header from './components/Header'
import Planet from './components/Planet'
import TravelButton from './components/TravelButton'

export default class App extends Component {

  state = {
    name: '',
    population: '',
    climate: '',
    terrain: '',
    featured: ''
  }

  componentDidMount() {
    this.getPlanet()
  }

  playAudio = () => {
    const audio = document.querySelector('audio')
    audio.play()
  }

  getPlanet = () => {
    const planetNumber = Math.floor(Math.random() * 61) + 1
    const url = `https://swapi.dev/api/planets/${planetNumber}`
    
    fetch(url)
      .then(response => response.json())
      .then(planetData => {
        this.setState({
          name: planetData.name,
          population: planetData.population,
          climate: planetData.climate,
          terrain: planetData.terrain,
          featured: planetData.films.length.toString()
        })
      })
      .catch(error => {
        console.log(error)
        const message = document.querySelector('.main')
        message.innerHTML = `<p class='error'>Sorry, the planet data can't be loaded. Try later!</p>`
      })
  }

  render() {
    const {name, population, climate, terrain, featured} = this.state    
    return (
      <div className='App'>
        <div className='stars' role='img' alt='Twinkling stars background'></div>
        <div className='twinkle' role='img' alt='Twinkling stars background'></div>
        <Header />
        <Planet
          name={name}
          population={population}
          climate={climate}
          terrain={terrain}
          featured={featured}
        />
        <TravelButton
          getPlanet={this.getPlanet}
          playAudio={this.playAudio}
        />
      </div>
    )
  }
}
