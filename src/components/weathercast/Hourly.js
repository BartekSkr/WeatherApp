import React, { useContext } from 'react'
import { currentDay, currentMonthNumber, currentHour } from './helpers'
import WeatherContext from '../context/weatherContext'

export const Hourly = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData } = weatherContext

  return (
    <div className='hourlyWeather'>
      <h2>Hourly</h2>
      <div className='hourlyScroll' value={weatherData}>
        {weatherData.hourly?.map(hourly => (
          <div className='hourlyDiv' key={hourly.dt}>
            <p>{currentDay(hourly.dt)}.{currentMonthNumber(hourly.dt)}</p>
            <p>{currentHour(hourly.dt)}:00</p>
            <img src={`https://openweathermap.org/img/wn/${hourly.weather[0].icon}.png`}alt='weather icon' />
            <h3>{Math.round(hourly.temp)}°</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
