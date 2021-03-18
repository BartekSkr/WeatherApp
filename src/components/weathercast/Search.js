import React, { useEffect, useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

export const Search = () => {
  const API_KEY = '0bac33954886be6ef132dd40102b00fe'
  const [weatherData, setWeatherData] = useState([])

  //  Get user position after click in compass button
  const handleOnClick = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('Latitude: ' + position.coords.latitude)
      console.log('Longitude: ' + position.coords.longitude)
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('Latitude: ' + position.coords.latitude)
      console.log('Longitude: ' + position.coords.longitude)

      axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely&appid=${API_KEY}`)
        .then(res => {
          setWeatherData(res.data)
          console.log(res.data)
        })
        .catch(err => {
        console.log(err)
      })
    })
  }, [])

  return (
    <div className='search'>
      <FontAwesomeIcon icon={faSearch} id='searchIcon'/>
      <input type="text" placeholder='Enter a city' />
      <button onClick={handleOnClick} id='locationIcon'>
        <FontAwesomeIcon icon={faCompass} size='2x' />
      </button>
    </div>
  )
}
