import React, { useContext } from 'react'
import './Alert.css'
import { v4 as uuidv4 } from 'uuid'
import WeatherContext from '../weather/weatherContext'
import { currentDay, currentHour, currentMinutes, currentMonth, onlyCityName } from '../../utils/helpers'

export const AlertPopUp = ({ trigger, setTrigger }) => {
  const weatherContext = useContext(WeatherContext)
  const { location, alerts } = weatherContext

  return (trigger) ? (
    <div className='alert-popup'>
      <div className='alert-popup-inner'>
        <h2>Weather alerts: {onlyCityName(location.name)}, {location.sys?.country}</h2>
        <div className='alert-popup-info'>
          {alerts.map(alert => (
            <div className='every-alert' key={uuidv4()}>
              <h4>{alert.event}</h4>
              <h5>{currentMonth(alert.start)} {currentDay(alert.start)}, {currentHour(alert.start)}:{currentMinutes(alert.start)} - {currentMonth(alert.end)} {currentDay(alert.end)}, {currentHour(alert.end)}:{currentMinutes(alert.end)}</h5>
              <p id='alert-description'>{alert.description}</p>
              <h6>{alert.sender_name}</h6>
            </div>
          ))}
        </div>
        <button id='popup-button' onClick={() => setTrigger(false)}>✖️</button>
      </div>
    </div>
  ) : ''
}
