import React from 'react'
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Today = () => {
  return (
    <div className='todayWeather'>
      <div className='location'>
        <h1>Warsaw, PL</h1>
        <p>Wednesday 17 March</p>
      </div>
      <div className='today-temp'>
        <span className='todayIcon'>
          <FontAwesomeIcon icon={faCloud} size='3x' />
        </span>
        <span id='todayTemp'>3°</span>
      </div>
      <div className='today-data'>
        <div>
          <h4>5°</h4>
          <p>High</p>
          <h4>2°</h4>
          <span>Low</span>
        </div>
        <div>
          <h4>15 km/h</h4>
          <p>Wind</p>
          <h4>81%</h4>
          <span>Rain</span>
        </div>
        <div>
          <h4>7:13</h4>
          <p>Sunrise</p>
          <h4>19:02</h4>
          <span>Sunset</span>
        </div>
      </div>
    </div>
  )
}
