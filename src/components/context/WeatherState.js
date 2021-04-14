import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherContext from './weatherContext'

export const WeatherState = props => {
  const API_KEY = '0bac33954886be6ef132dd40102b00fe'
  const [location, setLocation] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [display, setDisplay] = useState(false)

  useEffect(() => { handleUserLocation() }, [])

  //  searching city
  const handleSearchCity = e => {
    if (e.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=${API_KEY}`)
        .then(res => {
          axios.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric&appid=${API_KEY}`),
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric&exclude=minutely&appid=${API_KEY}`)
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
      let locationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`
      let weatherDataApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=${API_KEY}`

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
      {props.children}
    </WeatherContext.Provider>
  )
}
