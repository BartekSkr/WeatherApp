import React from 'react'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Hourly = () => {
  return (
    <div className='hourlyWeather'>
      <h2>Hourly</h2>
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
      </div>
    </div>
  )
}
