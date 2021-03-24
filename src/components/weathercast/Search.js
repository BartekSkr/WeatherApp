import React, { useEffect, useState, useContext } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import WeatherContext from '../context/weatherContext'

export const Search = () => {
  const API_KEY = '0bac33954886be6ef132dd40102b00fe'
  const [cityWeatherData, setCityWeatherData] = useState([])
  const weatherContext = useContext(WeatherContext)
  const { weatherData } = weatherContext

  //  display weather for typed city
  const handleOnChange = (city) => {
    if (city.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.target.value}&units=metric&appid=${API_KEY}`)
        .then(res => {
          setCityWeatherData(res.data)
          console.log(res.data)
        }).catch(err => {
          console.log(err)
        })
    }
  }

  //  handleOnClick
  const handleOnClick = () => {
    console.log(weatherData)
  }

  return (
    <div className='search'>
      <FontAwesomeIcon icon={faSearch} id='searchIcon'/>
      <input type="text" placeholder='Enter a city' onKeyDown={handleOnChange}/>
      <button onClick={handleOnClick} id='locationIcon'>
        <FontAwesomeIcon icon={faCompass} size='2x' />
      </button>
    </div>
  )
}
