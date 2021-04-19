import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherContext from './weatherContext'

export const WeatherState = ({ children }) => {
  const [location, setLocation] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [display, setDisplay] = useState(false)
  const [locationError, setLocationError] = useState(false)
  const [cityNameError, setCityNameError] = useState(false)

  useEffect(() => {
    handleUserLocation()
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //  searching city
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
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
          // window.alert(`Please enter correct city name`)
          if (err) {
            setCityNameError(true)
            setLocationError(false)
            setDisplay(false)
          }
        })
    }
  }

  //  showing data for user location
  const handleUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
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
          })
          .catch(err => console.log(err))
      },
      function (error) {
        // if (error.code === 1) window.alert('Please enable geolocation in the browser!')
        if (error.code === 1) {
          setLocationError(true)
          setCityNameError(false)
          setDisplay(false)
        }
      }
    )


    // navigator.geolocation.getCurrentPosition(position => {
    //   let locationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    //   let weatherDataApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`

    //   axios.all([
    //     axios.get(locationApi),
    //     axios.get(weatherDataApi)
    //   ])
    //     .then(res => {
    //       setLocation(res[0].data)
    //       setWeatherData(res[1].data)
    //       setDisplay(true)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // })
  }

  return (
    <WeatherContext.Provider value={{ weatherData, location, display, locationError, cityNameError, handleSearchCity, handleUserLocation }}>
      {children}
    </WeatherContext.Provider>
  )
}
