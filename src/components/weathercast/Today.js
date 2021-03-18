import React, { useState, useEffect} from 'react'
import axios from 'axios'
// import { onlyCity } from './helpers'

export const Today = () => {
  const API_KEY = '0bac33954886be6ef132dd40102b00fe'
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely&appid=${API_KEY}`)
        .then(res => {
          setWeatherData(res.data)
          console.log(res.data)
          console.log(weatherData.current.weather[0])
        })
        .catch(err => {
        console.log(err)
      })
    })
  }, [])

  return (
    <div className='todayWeather'>
      <div className='location'>
        <h1>{weatherData.timezone}</h1>
        <p>Wednesday 17 March</p>
      </div>
      <div className='mainData'>
        <div className='today-temp'>
          <img src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`} className='todayIcon' alt='weather icon' />
          <span className='tempAndDesc'>
            <span id='todayTemp'>3°</span>
            <span>Cloudy</span>
          </span>
        </div>
      <div className='today-data'>
        <div>
          <h4>5°</h4>
          <p>High</p>
          <h4>2°</h4>
          <span>Low</span>
        </div>
        <div>
          <h4>15 km/h</h4>
          <p>Wind</p>
          <h4>81%</h4>
          <span>Rain</span>
        </div>
        <div>
          <h4>7:13</h4>
          <p>Sunrise</p>
          <h4>19:02</h4>
          <span>Sunset</span>
        </div>
      </div>
    </div>
  </div>
  )
}
