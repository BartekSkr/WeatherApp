import React, { useContext } from 'react'
import { currentDay, currentMonthNumber } from './helpers'
import WeatherContext from '../context/weatherContext'

export const Daily = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData } = weatherContext

  return (
    <div className='dailyWeather'>
      <h2>Daily</h2>
      <div className='dailyScroll' value={weatherData}>
        {weatherData.daily?.map(daily => (
          <div className='hourlyDiv' key={daily.dt}>
            <p>{currentDay(daily.dt)}.{currentMonthNumber(daily.dt)}</p>
            <img src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}alt='weather icon' />
            <h3>{Math.round(daily.temp.day)}°</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
