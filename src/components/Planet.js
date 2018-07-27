import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Planet extends Component {

  state = {
    name: '',
    population: '',
    climate: '',
    terrain: '',
    featured: ''
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
      <main className='main'>
        <ul className='planet'>
          <li className='planet__name'>{ name }</li>
          <li>Population: { population }</li>
          <li>Climate: { climate }</li>
          <li>Terrain: { terrain }</li>
          <li>Featured in the films: { featured }</li>
        </ul>
      </main>
    );
  }
}

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  featured: PropTypes.string.isRequired
}

export default Planet;