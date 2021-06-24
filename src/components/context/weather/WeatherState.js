import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherContext from './weatherContext'

export const WeatherState = ({ children }) => {
  const [location, setLocation] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [display, setDisplay] = useState(false)
  const [locationError, setLocationError] = useState(false)
  const [cityNameError, setCityNameError] = useState(false)
  //==================
  const [alerts, setAlert] = useState([])

  useEffect(() => {
    handleUserLocation()
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //  city search
  const handleSearchCity = e => {
    if (e.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
          axios.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`),
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`)
          ])
            .then(res => {
              setLocation(res[0].data)
              setWeatherData(res[1].data)
              setDisplay(true)
              setLocationError(false)
              setCityNameError(false)

              if (res[1].data.alerts) {
                setAlert(res[1].data.alerts)
              } else {
                setAlert([])
              }
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
          if (err) {
            setCityNameError(true)
            setLocationError(false)
            setDisplay(false)
          }
        })
    }
  }

  //  showing data in the user's location
  const handleUserLocation = () => { navigator.geolocation.getCurrentPosition(userLocationSuccess, userLocationError, { enableHighAccuracy: true }) }

  const userLocationSuccess = (position) => {
    let locationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    let weatherDataApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`

    axios.all([
      axios.get(locationApi),
      axios.get(weatherDataApi)
    ])
      .then(res => {
        setLocation(res[0].data)
        setWeatherData(res[1].data)
        setDisplay(true)
        setLocationError(false)
        setCityNameError(false)

        // console.log(res[1].data)
        if (res[1].data.alerts) {
          setAlert(res[1].data.alerts)
        } else {
          setAlert([])
        }
      })
      .catch(err => console.log(err))
  }

  const userLocationError = (error) => {
    if (error.code === 1) {
      setLocationError(true)
      setCityNameError(false)
      setDisplay(false)
    }
  }

  return (
    <WeatherContext.Provider value={{ weatherData, location, display, locationError, cityNameError, alerts,handleSearchCity, handleUserLocation }}>
      {children}
    </WeatherContext.Provider>
  )
}
