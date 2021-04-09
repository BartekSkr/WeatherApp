import React, { Fragment, useState } from 'react'
import './Toast.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export const Toast = () => {
  const [dailyVisible, setDailyVisible] = useState('')
  const [locationVisible, setLocationVisible] = useState('')

  return (
    <Fragment>
      <div className={`toastDailyInfo ${dailyVisible}`}>
        <FontAwesomeIcon icon={faCheckCircle} size='2x' className='check-icon daily' onClick={() => setDailyVisible('hide')} />
        <p className='toastMessage'>Click on a specific day in 'Daily' field to see weather details</p>
      </div>
      <div className={`toastLocationInfo ${locationVisible}`}>
        <FontAwesomeIcon icon={faCheckCircle} size='2x' className='check-icon' onClick={() => setLocationVisible('hide')} />
        <p className='toastMessage'>Click on <FontAwesomeIcon icon={faMapMarkerAlt}/> to see weather for your location</p>
      </div>
    </Fragment>
  )
}
