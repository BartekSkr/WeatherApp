import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherContext from './weatherContext'

export const WeatherState = props => {
  const API_KEY = '0bac33954886be6ef132dd40102b00fe'
  const [location, setLocation] = useState([])
  const [weatherData, setWeatherData] = useState([])


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      let locationApi = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`
      let weatherDataApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=${API_KEY}`

      axios.all([
        axios.get(locationApi),
        axios.get(weatherDataApi)
      ])
        .then(res => {
          setLocation(res[0].data)
          setWeatherData(res[1].data)
        })
        .catch(err => {
          console.log(err)
      })
    })
  }, [])

  return (
    <WeatherContext.Provider value={{ weatherData, location }}>
      {props.children}
    </WeatherContext.Provider>
  )
}
