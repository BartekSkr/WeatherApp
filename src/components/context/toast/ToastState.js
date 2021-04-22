import React, { useState } from 'react'
import './Toast.css'
import ToastContext from './toastContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const ToastState = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const [visible, setVisible] = useState('')

  const addToast = (toast) => {
    setToasts(toasts => [...toasts, toast])
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
        {toasts.map(toast => (
          <div className={`dailyInfo ${visible}`}>
            <FontAwesomeIcon icon={faCheckCircle} size='2x' className='check-icon' key={toast}
              onClick={() => setVisible('hide')} />
            <p className='toastMessage'>{toast}</p>
          </div>
        ))}
    </ToastContext.Provider>
  )
}
