import React, { useContext, Fragment, useState } from 'react'
import './Alert.css'
import WeatherContext from '../weather/weatherContext'
import { alertsNumber } from '../../utils/helpers'
import { AlertPopUp } from './AlertPopUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export const Alert = () => {
  const weatherContext = useContext(WeatherContext)
  const { alerts } = weatherContext
  const [popUpDisplay, setPopUpDisplay] = useState(false)

  return (
    <Fragment>
      <div className='alert-info' onClick={() => setPopUpDisplay(true)}>
        <FontAwesomeIcon icon={faInfoCircle} id='icon-info' />
        <span>{alerts[0]?.event} {alertsNumber(alerts.length)}</span>
      </div>
        <AlertPopUp trigger={popUpDisplay} setTrigger={setPopUpDisplay} />
    </Fragment>
  )
}
