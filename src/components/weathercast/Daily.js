import React, { Fragment, useContext, useState } from 'react'
import { currentDay, currentHour, currentMinutes, currentMonthNumber, windDirection } from './helpers'
import WeatherContext from '../context/weatherContext'

export const Daily = () => {
  const [dailyDetailsWeather, setDailyDetailsWeather] = useState([])
  const [isVisible, setIsVisible] = useState('')
  const [chosenDay, setChosenDay] = useState('')
  const weatherContext = useContext(WeatherContext)
  const { weatherData } = weatherContext

  const handleOnClick = dailyDetails => {
    return function () {
      setDailyDetailsWeather(dailyDetails)
      setChosenDay(dailyDetails.dt)
      setIsVisible('visible')
    }
  }

  return (
      < Fragment >
      <div className='dailyWeather'>
        <h2>Daily</h2>
        <div className='scrollDiv' value={weatherData}>
          {weatherData.daily?.slice(1).map(daily => (
            <div className={chosenDay === daily.dt ? 'scrollBoxClicked' : 'scrollBox'} id='scrollBoxId' key={daily.dt} onClick={handleOnClick(daily)}>
              <h5>{currentDay(daily.dt)}.{currentMonthNumber(daily.dt)}</h5>
              <img src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}alt='weather icon' />
              <h3>{Math.round(daily.temp.day)}°</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={`dailyDetails ${isVisible}`}>
        <div>
          <h4>{Math.round(dailyDetailsWeather.temp?.max)}°</h4>
          <p>Max temp</p>
          <h4>{Math.round(dailyDetailsWeather.temp?.min)}°</h4>
          <span>Min temp</span>
        </div>
        <div>
          <h4>{Math.round(dailyDetailsWeather.wind_speed)} km/h</h4>
          <p>Wind</p>
          <h4>{windDirection(dailyDetailsWeather.wind_deg)}</h4>
          <span>Direction</span>
        </div>
        <div>
          <h4>{currentHour(dailyDetailsWeather.sunrise)}:{currentMinutes(dailyDetailsWeather.sunrise)}</h4>
          <p>Sunrise</p>
          <h4>{currentHour(dailyDetailsWeather.sunset)}:{currentMinutes(dailyDetailsWeather.sunset)}</h4>
          <span>Sunset</span>
        </div>
      </div>
    </Fragment>
  )
}
