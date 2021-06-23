import React, { useContext } from 'react'
import WeatherContext from '../context/weather/weatherContext'
import { alertsNumber } from '../utils/helpers'

export const Alert = () => {
  const weatherContext = useContext(WeatherContext)
  const { alerts } = weatherContext

  return (
    <div className='alert-info'>
      {/* <p>{alerts[0]?.event} +{alerts.length}</p> */}
      <p>{alerts[0]?.event} {alertsNumber(alerts.length)}</p>
    </div>
  )
}
