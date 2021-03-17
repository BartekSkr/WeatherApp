import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Search = () => {
  return (
    <div className='search'>
      <FontAwesomeIcon icon={faSearch} id='searchIcon'/>
      <input type="text" placeholder='Enter a city' />
      <FontAwesomeIcon icon={faCompass} id='locationIcon' />
    </div>
  )
}
