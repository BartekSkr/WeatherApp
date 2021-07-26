//  wind direction
export const windDirection = wind => {
  if (wind >= 350 || wind <= 10) return 'N ⬇'
  if (wind > 10 && wind < 80) return 'NE ↙'
  if (wind >= 80 && wind <= 100) return 'E ⬅'
  if (wind > 100 && wind < 170) return 'SE ↖'
  if (wind >= 170 && wind <= 190) return 'S ⬆'
  if (wind > 190 && wind < 260) return 'SW ↗'
  if (wind >= 260 && wind <= 280) return 'W ➡'
  if (wind > 280 && wind < 350) return 'NW ↘'
}

//  name of the day
export const currentDayName = unixDate => {
  let day = new Date(unixDate * 1000)
  if (day.getDay() === 0) return 'Sunday'
  if (day.getDay() === 1) return 'Monday'
  if (day.getDay() === 2) return 'Tuesday'
  if (day.getDay() === 3) return 'Wednesday'
  if (day.getDay() === 4) return 'Thursday'
  if (day.getDay() === 5) return 'Friday'
  if (day.getDay() === 6) return 'Saturday'
}

//  day
export const currentDay = (unixDate, timezone) => {
  return new Date((unixDate + timezone) * 1000).getDate()
}

//  number of the month
export const currentMonthNumber = unixDate => {
  let month = new Date(unixDate * 1000)
  return month.getMonth().toString().length === 1
    ? `0${month.getMonth() + 1}`
    : month.getMonth() + 1
}

//  name of the month
export const currentMonth = unixDate => {
  let month = new Date(unixDate * 1000)
  if (month.getMonth() === 0) return 'January'
  if (month.getMonth() === 1) return 'February'
  if (month.getMonth() === 2) return 'March'
  if (month.getMonth() === 3) return 'April'
  if (month.getMonth() === 4) return 'May'
  if (month.getMonth() === 5) return 'June'
  if (month.getMonth() === 6) return 'July'
  if (month.getMonth() === 7) return 'August'
  if (month.getMonth() === 8) return 'September'
  if (month.getMonth() === 9) return 'October'
  if (month.getMonth() === 10) return 'November'
  if (month.getMonth() === 11) return 'December'
}

//  hour
export const currentHour = (unixDate, timezone) => {
  return new Date((unixDate + timezone) * 1000).getHours() - 2
}

//  minutes
export const currentMinutes = unixDate => {
  let minutes = new Date(unixDate * 1000)
  if (minutes.getMinutes().toString().length === 1) return `0${minutes.getMinutes()}`
  return minutes.getMinutes()
}

//  convert m/s to km/h
export const windSpeedToKm = mps => mps * 3.6

//  removing 'voivodeship' from city name
export const onlyCityName = cityName => {
  return cityName?.includes('Voivodeship') ? cityName.replace('Voivodeship', '').slice(0, -1) : cityName
}

//  alerts info number
export const alertsNumber = number => {
  if (number === 1) return
  if (number > 1) return `(+${number - 1})`
}