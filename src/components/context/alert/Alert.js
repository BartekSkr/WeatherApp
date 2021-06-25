import React, { useContext, Fragment, useState } from 'react'
import './Alert.css'
import WeatherContext from '../weather/weatherContext'
import { alertsNumber } from '../../utils/helpers'
import { AlertPopUp } from './AlertPopUp'

export const Alert = () => {
  const weatherContext = useContext(WeatherContext)
  const { alerts } = weatherContext
  const [popUpDisplay, setPopUpDisplay] = useState(false)

  return (
    <Fragment>
      <div className='alert-info' onClick={() => setPopUpDisplay(true)}>
        <p>{alerts[0]?.event} {alertsNumber(alerts.length)}</p>
      </div>
        <AlertPopUp trigger={popUpDisplay} setTrigger={setPopUpDisplay} />
    </Fragment>
  )
}
