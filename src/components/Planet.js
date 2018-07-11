import React, { Component } from 'react';

class Planet extends Component {
  // Constructor
  constructor(props) {
    super(props);

    // States
    this.state = {
      name: '',
      population: '',
      climate: '',
      terrain: '',
      featured: ''
    }
  }

  componentWillReceiveProps() {
    setTimeout(() => {

      // Updates states with props
      this.setState({
        name: this.props.name,
        population: this.props.population,
        climate: this.props.climate,
        terrain: this.props.terrain,
        featured: this.props.featured
      });
    }, 1000);
  }

  render() {

    const {name, population, climate, terrain, featured} = this.state;

    return (
      <div className='planet-board'>
        <h2 className='planet-name'>{ name }</h2>
        <ul className='planet-info'>
          <li>Population: { population }</li>
          <li>Climate: { climate }</li>
          <li>Terrain: { terrain }</li>
          <li>Featured in { featured } films</li>
        </ul>
      </div>
    );
  }
}

export default Planet;