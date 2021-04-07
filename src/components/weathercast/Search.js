import React, { useContext } from 'react'
import WeatherContext from '../context/weatherContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  const weatherContext = useContext(WeatherContext)
  const { handleClickEnter, handleUserLocation } = weatherContext

  return (
    <div className='search'>
      <button id='searchButton'>
        <FontAwesomeIcon icon={faSearch} id='searchIcon' />
      </button>
      <input type="text" className='searchInput' placeholder='Search city...'
        onClick={(e) => e.target.value = ''}
        onKeyUp={handleClickEnter}
      />
      <button id='locationButton' onClick={handleUserLocation}>
        <FontAwesomeIcon icon={faMapMarkerAlt} id='locationIcon' />
      </button>
    </div>
  )
}
