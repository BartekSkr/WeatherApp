import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherContext from './weatherContext'

export const WeatherState = props => {
  const API_KEY = '0bac33954886be6ef132dd40102b00fe'
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=${API_KEY}`)
        .then(res => {
          setWeatherData(res.data)
          console.log(res.data)
        })
        .catch(err => {
        console.log(err)
        })
    })
  }, [])

  return (
    <WeatherContext.Provider value={{weatherData}}>
      {props.children}
    </WeatherContext.Provider>
  )
}
