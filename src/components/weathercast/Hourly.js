import React, { Fragment, useContext } from 'react'
import { currentDay, currentMonthNumber, currentHour } from '../utils/helpers'
import WeatherContext from '../context/weather/weatherContext'

export const Hourly = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData, display } = weatherContext

  return (
    <Fragment>
      {display === true &&
        <div className='hourlyWeather'>
          <h2>Hourly</h2>
          <div className='scrollDiv' value={weatherData}>
            {weatherData.hourly?.slice(1, 26).map(hourly => (
              <div className='scrollBox' key={hourly.dt}>
                <h5>{currentDay(hourly.dt)}.{currentMonthNumber(hourly.dt)}</h5>
                <h4>{currentHour(hourly.dt)}:00</h4>
                <img src={`https://openweathermap.org/img/wn/${hourly.weather[0].icon}.png`} alt='weather icon' />
                <h3>{Math.round(hourly.temp)}°</h3>
              </div>
            ))}
          </div>
        </div>
      }
    </Fragment>
  )
}
