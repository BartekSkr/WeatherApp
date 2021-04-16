import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherContext from './weatherContext'

export const WeatherState = ({ children }) => {
  const [location, setLocation] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [display, setDisplay] = useState(false)

  // let apiKey
  let apiKey

  useEffect(() => {
    handleUserLocation()
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (process.env.NODE_ENV !== 'production') {
    apiKey = process.env.REACT_APP_API_KEY
  } else {
    apiKey = process.env.API_KEY
  }

  //  searching city
  const handleSearchCity = e => {
    if (e.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=${apiKey}`)
        .then(res => {
          axios.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric&appid=${apiKey}`),
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric&exclude=minutely&appid=${apiKey}`)
          ])
            .then(res => {
              setLocation(res[0].data)
              setWeatherData(res[1].data)
              setDisplay(true)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  //  showing data for user location
  const handleUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let locationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`
      let weatherDataApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=${apiKey}`

      axios.all([
        axios.get(locationApi),
        axios.get(weatherDataApi)
      ])
        .then(res => {
          setLocation(res[0].data)
          setWeatherData(res[1].data)
          setDisplay(true)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  return (
    <WeatherContext.Provider value={{ weatherData, location, display, handleSearchCity, handleUserLocation }}>
      {children}
    </WeatherContext.Provider>
  )
}
