import React, { useState } from 'react'
import './Toast.css'
import ToastContext from './toastContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const ToastState = ({ children }) => {
  const [visible, setVisible] = useState('')
  const [showToast, setShowToast] = useState(true)

  const [msg, setMsg] = useState([])

  const addToast = (msgs) => {
    setMsg(msg => [...msg, msgs])
  }

  return (
    <ToastContext.Provider value={{ addToast, showToast }}>
      {children}
        {msg.map(msgs => (
          <div className={`daily-info ${visible}`} key={Math.round(Math.random(1, 1000000) * 1000000)}>
            <FontAwesomeIcon icon={faCheckCircle} size='2x' className='check-icon'
              onClick={() => {
                setVisible('hide')
                setShowToast(false)
              }}
            />
            <p className='toast-message'>{msgs}</p>
          </div>
        ))}
    </ToastContext.Provider>
  )
}
