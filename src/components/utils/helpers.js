//  wind direction
export const windDirection = wind => {
  if (wind === 0 || wind === 360) return 'N ⬇'
  if (wind > 0 && wind < 90) return 'NE ↙'
  if (wind === 90) return 'E ⬅'
  if (wind > 90 && wind < 180) return 'SE ↖'
  if (wind === 180) return 'S ⬆'
  if (wind > 180 && wind < 270) return 'SW ↗'
  if (wind === 270) return 'W ➡'
  if (wind > 270 && wind < 360) return 'NW ↘'
}

//  day name
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
export const currentDay = unixDate => {
  return new Date(unixDate * 1000).getDate()
}

//  month number
export const currentMonthNumber = unixDate => {
  let month = new Date(unixDate * 1000)
  return month.getMonth().toString().length === 1
    ? `0${month.getMonth() + 1}`
    : month.getMonth() + 1
}

//  month
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
export const currentHour = unixDate => {
  return new Date(unixDate * 1000).getHours()
}

//  minutes
export const currentMinutes = unixDate => {
  let minutes = new Date(unixDate * 1000)
  if (minutes.getMinutes().toString().length === 1) return `0${minutes.getMinutes()}`
  return minutes.getMinutes()
}

//  convert m/s to km/h
export const windSpeedToKm = mps => mps * 3.6

//  cutting off the word 'voivodeship' from the name of the city
export const onlyCityName = cityName => {
  return cityName?.includes('Voivodeship') ? cityName.replace('Voivodeship', '').slice(0, -1) : cityName
}

//  random key for toast
export const randomKeyNumber = () => Math.round(Math.random(1, 1000000) * 1000000)