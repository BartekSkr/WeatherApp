import React, { useState } from 'react'
import './Toast.css'
import ToastContext from './toastContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { randomKeyNumber } from '../../utils/helpers'

export const ToastState = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const [visible, setVisible] = useState('')
  const [showToast, setShowToast] = useState(true)

  const addToast = toast => {
    setToasts(toasts => [...toasts, toast])
  }

  return (
    <ToastContext.Provider value={{ addToast, showToast }}>
      {children}
        {toasts.map(toast => (
          <div className={`dailyInfo ${visible}`} key={randomKeyNumber}>
            <FontAwesomeIcon icon={faCheckCircle} size='2x' className='check-icon'
              onClick={() => {
                setVisible('hide')
                setShowToast(false)
              }}
            />
            <p className='toastMessage'>{toast}</p>
          </div>
        ))}
    </ToastContext.Provider>
  )
}
