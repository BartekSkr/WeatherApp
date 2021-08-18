import React, { Fragment, useContext } from 'react'
import './Hourly.css'
import { currentDay, currentMonthNumber, currentHour, windSpeedToKm, windDirection } from '../utils/helpers'
import WeatherContext from '../context/weather/weatherContext'

export const Hourly = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData, display } = weatherContext

  return (
    <Fragment>
      {display === true &&
        <div className='hourly-weather'>
          <h2>Hourly</h2>
          <div className='scroll-div' value={weatherData}>
            {weatherData.hourly?.slice(1, 26).map(hourly => (
              <div className='scroll-box' key={hourly.dt}>
                <h5>{currentDay(hourly.dt, weatherData.timezone_offset)}.{currentMonthNumber(hourly.dt)}</h5>
                <h4>{currentHour(hourly.dt, weatherData.timezone_offset)}:00</h4>
                <img
                  src={`https://openweathermap.org/img/wn/${hourly.weather[0].icon}.png`}
                  alt='weather icon'
                />
                <h5>{Math.round(windSpeedToKm(hourly.wind_speed))} km/h</h5>
                <h5>{windDirection(hourly.wind_deg)}</h5>
                <h3>{Math.round(hourly.temp)}°</h3>
              </div>
            ))}
          </div>
        </div>
      }
    </Fragment>
  )
}
