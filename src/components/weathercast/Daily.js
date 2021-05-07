import React, { Fragment, useContext, useState } from 'react'
import { currentDay, currentDayName, currentHour, currentMinutes, currentMonthNumber, windDirection, windSpeedToKm } from '../utils/helpers'
import WeatherContext from '../context/weather/weatherContext'

export const Daily = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData, display } = weatherContext

  const [dailyDetailsWeather, setDailyDetailsWeather] = useState([])
  const [isVisible, setIsVisible] = useState('')
  const [chosenDay, setChosenDay] = useState('')

  const handleOnClick = dailyDetails => {
    return function () {
      setDailyDetailsWeather(dailyDetails)
      setChosenDay(dailyDetails.dt)
      setIsVisible('visible')
    }
  }

  return (
    <Fragment>
      {display === true &&
        <Fragment>
          <div className='daily-weather'>
          <h2>Daily</h2>
            <div className='scroll-div'>
              {weatherData.daily?.slice(1).map(daily => (
                <div className={chosenDay === daily.dt ? 'scroll-box-clicked' : 'scroll-box'} id='scrollBoxId' key={daily.dt} onClick={handleOnClick(daily)}>
                  <h5>{currentDay(daily.dt)}.{currentMonthNumber(daily.dt)}</h5>
                  <h6>{currentDayName(daily.dt)}</h6>
                  <img src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}alt='weather icon' />
                  <h3>{Math.round(daily.temp.day)}°</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={`daily-details ${isVisible}`}>
            <div>
              <h4>{Math.round(dailyDetailsWeather.temp?.max)}°</h4>
              <p>Max temp</p>
              <h4>{Math.round(dailyDetailsWeather.temp?.min)}°</h4>
              <span>Min temp</span>
            </div>
            <div>
              <h4>{Math.round(windSpeedToKm(dailyDetailsWeather.wind_speed))} km/h</h4>
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
      }
    </Fragment>
  )
}
