import React, { useContext} from 'react'
import { currentDay, currentDayName, currentHour, currentMinutes, currentMonth, onlyCity, windDirection } from './helpers'
import WeatherContext from '../context/weatherContext'

export const Today = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData } = weatherContext

  return (
    <div className='todayWeather'>
      <div className='location'>
        <h1>{onlyCity(weatherData.timezone)}</h1>
        <p>{currentDayName(weatherData.current?.dt)} {currentDay(weatherData.current?.dt)}, {currentMonth(weatherData.current?.dt)}</p>
      </div>
      <div className='mainData'>
        <div className='todayTemp'>
          <img src={`https://openweathermap.org/img/wn/${weatherData.current?.weather[0].icon}.png`} className='todayIcon' alt='weather icon' />
          <span className='tempAndDesc'>
            <span id='today-temp'>{Math.round(weatherData.current?.temp)}°</span>
            <span>{weatherData.current?.weather[0].description}</span>
          </span>
        </div>
      <div className='todayData'>
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
