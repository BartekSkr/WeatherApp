import React from 'react'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Daily = () => {
  return (
    <div className='dailyWeather'>
      <h2>Daily</h2>
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
      </div>
    </div>
  )
}
