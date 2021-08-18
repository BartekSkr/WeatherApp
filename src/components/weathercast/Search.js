import React, { useContext } from 'react'
import './Search.css'
import ReactTooltip from 'react-tooltip'
import WeatherContext from '../context/weather/weatherContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  const weatherContext = useContext(WeatherContext)
  const { handleSearchCity, handleUserLocation } = weatherContext

  return (
    <div className='search'>
      <button id='searchButton'>
        <FontAwesomeIcon icon={faSearch} id='searchIcon' />
      </button>
      <input
        type="text"
        name='text'
        className='search-input'
        placeholder='Search for a city...'
        onClick={(e) => e.target.value = ''}
        onKeyUp={handleSearchCity}
      />
      <button
        data-tip data-for='locationBtn'
        id='locationButton'
        onClick={handleUserLocation}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} id='locationIcon' />
      </button>
      {/* Tooltip for the location button */}
      <ReactTooltip id='locationBtn' place='left' effect='solid' >
        Show weather in your location
      </ReactTooltip>
    </div>
  )
}
