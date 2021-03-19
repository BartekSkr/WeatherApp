import React, { useContext } from 'react'
import { currentDay, currentMonthNumber, currentHour } from './helpers'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      {/* <h2>Hourly</h2>
      <div className='hourlyScroll'>
        <div className='hourlyDiv'>
          <p>18.03</p>
          <p>18:00</p>
          <p><FontAwesomeIcon icon={faCloudSunRain} /></p>
          <h3>5°</h3>
        </div>
        <div className='hourlyDiv'>
          <p>18.03</p>
          <p>19:00</p>
          <p><FontAwesomeIcon icon={faCloudSunRain}/></p>
          <h3>5°</h3>
        </div>
        <div className='hourlyDiv'>
          <p>18.03</p>
          <p>20:00</p>
          <p><FontAwesomeIcon icon={faCloudSunRain}/></p>
          <h3>5°</h3>
        </div>
        <div className='hourlyDiv'>
          <p>18.03</p>
          <p>21:00</p>
          <p><FontAwesomeIcon icon={faCloudSunRain}/></p>
          <h3>5°</h3>
        </div>
        <div className='hourlyDiv'>
          <p>18.03</p>
          <p>22:00</p>
          <p><FontAwesomeIcon icon={faCloudSunRain}/></p>
          <h3>5°</h3>
        </div>
        <div className='hourlyDiv'>
          <p>18.03</p>
          <p>23:00</p>
          <p><FontAwesomeIcon icon={faCloudSunRain}/></p>
          <h3>5°</h3>
        </div>
        <div className='hourlyDiv'>
          <p>18.03</p>
          <p>23:00</p>
          <p><FontAwesomeIcon icon={faCloudSunRain}/></p>
          <h3>5°</h3>
        </div>
      </div> */}
    </div>
  )
}

// mapowanie wyników
//  <div className='hourlyScroll' value={weatherData}>
//   {weatherData.hourly?.map(hourly => (
//     <div className='hourlyDiv' key={hourly.dt}>
//     <p>{currentDay(hourly.dt)}.{currentMonthNumber(hourly.dt)}</p>
//     <p>{currentHour(hourly.dt)}:00</p>
//     <img src={`https://openweathermap.org/img/wn/${hourly.weather[0].icon}.png`}alt='weather icon' />
//     <h3>{Math.round(hourly.temp)}°</h3>
//   )}
// </div>
