import React, { useContext } from 'react'
import { currentDay, currentMonthNumber } from './helpers'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            {/* <p>{currentHour(daily.dt)}:00</p> */}
            <img src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}alt='weather icon' />
            <h3>{Math.round(daily.temp.day)}°</h3>
          </div>
        ))}
      </div>

      {/* <h2>Daily</h2>
      <div className='dailyScroll'>
        <div className='dailyDiv'>
          <p>19.03</p>
          <p><FontAwesomeIcon icon={faCloudSunRain} /></p>
          <h3>5°</h3>
        </div>
        <div className='dailyDiv'>
          <p>20.03</p>
          <p><FontAwesomeIcon icon={faCloudSunRain} /></p>
          <h3>5°</h3>
        </div>
        <div className='dailyDiv'>
          <p>21.03</p>
          <p><FontAwesomeIcon icon={faCloudSunRain} /></p>
          <h3>5°</h3>
        </div>
        <div className='dailyDiv'>
          <p>22.03</p>
          <p><FontAwesomeIcon icon={faCloudSunRain} /></p>
          <h3>5°</h3>
        </div>
        <div className='dailyDiv'>
          <p>23.03</p>
          <p><FontAwesomeIcon icon={faCloudSunRain} /></p>
          <h3>5°</h3>
        </div>
        <div className='dailyDiv'>
          <p>24.03</p>
          <p><FontAwesomeIcon icon={faCloudSunRain} /></p>
          <h3>5°</h3>
        </div>
        <div className='hourlyDiv'>
          <p>25.03</p>
          <p><FontAwesomeIcon icon={faCloudSunRain}/></p>
          <p>5°</p>
        </div>
      </div> */}
    </div>
  )
}
