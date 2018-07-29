import React from 'react'
import { string } from 'prop-types'

const Planet = (props) => {

  return (
    <main className='main'>
      <ul className='planet'>
        <li className='planet__name'>{ props.name }</li>
        <li>Population: { props.population }</li>
        <li>Climate: { props.climate }</li>
        <li>Terrain: { props.terrain }</li>
        <li>Featured in the films: { props.featured }</li>
      </ul>
    </main>
  )
}

Planet.propTypes = {
  name: string.isRequired,
  population: string.isRequired,
  climate: string.isRequired,
  terrain: string.isRequired,
  featured: string.isRequired
}

export default Planet