import React, { useContext } from 'react'
import { currentDay, currentMonthNumber } from './helpers'
import WeatherContext from '../context/weatherContext'

export const Daily = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData } = weatherContext

  return (
    <div className='dailyWeather'>
      <h2>Daily</h2>
      <div className='scrollDiv' value={weatherData}>
        {weatherData.daily?.slice(1).map(daily => (
          <div className='scrollBox' key={daily.dt}>
            <h5>{currentDay(daily.dt)}.{currentMonthNumber(daily.dt)}</h5>
            <img src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}alt='weather icon' />
            <h3>{Math.round(daily.temp.day)}°</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
