import axios from 'axios'

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

export async function fetchWeatherInfo(location: string) {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
  )

  const info = res.data

  return {
    temp: info.main.temp,
    feels_like: info.main.feels_like,
    humidity: info.main.humidity,
    pressure: info.main.pressure,
    sea_level: info.main.sea_level,
    grnd_level: info.main.grnd_level,
    dt: info.dt,
  }
}
