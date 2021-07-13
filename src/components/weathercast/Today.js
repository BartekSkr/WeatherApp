import React, { Fragment, useContext } from 'react'
import { currentDay, currentDayName, currentHour, currentMinutes, currentMonth, onlyCityName, windDirection, windSpeedToKm } from '../utils/helpers'
import WeatherContext from '../context/weather/weatherContext'
import ToastContext from '../context/toast/toastContext'
import { Alert } from '../context/alert/Alert'

export const Today = () => {
  const weatherContext = useContext(WeatherContext)
  const { weatherData, location, display, locationError, cityNameError, alerts } = weatherContext
  const toastContext = useContext(ToastContext)
  const { addToast, showToast } = toastContext

  return (
    <Fragment>
      {locationError === true &&
        <div className='error-info'>
          <p>Please enable geolocation or enter a city name.</p>
        </div>
      }
      {cityNameError === true &&
        <div className='error-info'>
          <p>Sorry, the specified city was not found.</p>
        </div>
      }
      {display === true &&
        <div className='today-weather'
        //  shows a toast message after component load
          onLoad={() => {
            if(showToast===true) addToast('Click on a specific day in "Daily" field to see weather details')
          }}
        >
          <div className='location'>
            <h1>{onlyCityName(location.name)}, {location.sys?.country}</h1>
            <p>{currentDayName(weatherData.current?.dt)}, {currentMonth(weatherData.current?.dt)} {currentDay(weatherData.current?.dt)}</p>
          </div>
          <div className='main-data'>
            <div className='today-container'>
              <div className='today-temp'>
                <img src={`https://openweathermap.org/img/wn/${weatherData.current?.weather[0].icon}@2x.png`} className='today-icon' alt='weather icon' />
                <span className='temp-desc'>
                  <span id='todayTemp'>{Math.round(weatherData.current?.temp)}°</span>
                  <span>{weatherData.current?.weather[0].description}</span>
                </span>
              </div>
              {/* alert info (if there are any alerts) */}
              {alerts.length > 0 && <Alert />}
            </div>
            <div className='today-data'>
              <div>
                <h4>{Math.round(weatherData.current?.feels_like)}°</h4>
                <p>Feels like</p>
                <h4>{weatherData.current?.humidity}%</h4>
                <span>Humidity</span>
              </div>
              <div>
                <h4>{Math.round(windSpeedToKm(weatherData.current?.wind_speed))} km/h</h4>
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
      }
    </Fragment>
  )
}
