import React, { useState } from 'react'
import './Toast.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const Toast = () => {
  const [visible, setVisible] = useState('')

  return (
    <div className={`toastContainer ${visible}`}>
      <FontAwesomeIcon icon={faCheckCircle} size='2x' id='check-icon' onClick={() => setVisible('hide')} />
      <p className='toastMessage'>Click on a next day in 'Daily' to see weather details</p>
    </div>
  )
}
