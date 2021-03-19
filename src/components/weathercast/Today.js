import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { currentDay, currentDayName, currentHour, currentMinutes, currentMonth, currentMonthNumber, onlyCity, windDirection } from './helpers'
import WeatherContext from '../context/weatherContext'

export const Today = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData } = weatherContext
  // const API_KEY = '0bac33954886be6ef132dd40102b00fe'
  // const [weatherData, setWeatherData] = useState([])

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=${API_KEY}`)
  //       .then(res => {
  //         setWeatherData(res.data)
  //         console.log(res.data)
  //       })
  //       .catch(err => {
  //       console.log(err)
  //       })
  //   })
  // }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=0bac33954886be6ef132dd40102b00fe`)
        .then(res => {
          // setWeatherData(res.data)
          console.log(res.data)
        })
        .catch(err => {
        console.log(err)
        })
    })
  }, [])

  return (
    <div className='todayWeather'>
      <div className='location'>
        <h1>{onlyCity(weatherData.timezone)}</h1>
        <p>{currentDayName(weatherData.current?.dt)} {currentDay(weatherData.current?.dt)}, {currentMonth(weatherData.current?.dt)}</p>
      </div>
      <div className='mainData'>
        <div className='today-temp'>
          <img src={`https://openweathermap.org/img/wn/${weatherData.current?.weather[0].icon}.png`} className='todayIcon' alt='weather icon' />
          <span className='tempAndDesc'>
            <span id='todayTemp'>{Math.round(weatherData.current?.temp)}°</span>
            <span>{weatherData.current?.weather[0].description}</span>
          </span>
        </div>
      <div className='today-data'>
        <div>
          <h4>{Math.round(weatherData.current?.feels_like)}°</h4>
          <p>Feels like</p>
          <h4>{weatherData.current?.humidity}%</h4>
          <span>Humidity</span>
        </div>
        <div>
          <h4>{Math.round(weatherData.current?.wind_speed)} km/h</h4>
          <p>Wind</p>
          <h4>{windDirection(weatherData.current?.wind_deg)}</h4>
          <span>Direction</span>
        </div>
        <div>
          <h4>{currentHour(weatherData.current?.sunrise)}:{currentMinutes(weatherData.current?.sunrise)}</h4>
          <p>Sunrise</p>
          <h4>{currentHour(weatherData.current?.sunset)}:{currentMinutes(weatherData.current?.sunrise)}</h4>
          <span>Sunset</span>
        </div>
      </div>
      </div>
    </div>
  )
}
