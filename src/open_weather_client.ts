import axios from 'axios'

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

export type WeatherInfo = {
  location: string
  temp: number
  feels_like: number
  humidity: number
  pressure: number
  sea_level: number
  grnd_level: number
  dt: number
}

export async function fetchWeatherInfo(location: string): Promise<WeatherInfo> {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
  )

  const info = res.data

  return {
    location,
    temp: info.main.temp,
    feels_like: info.main.feels_like,
    humidity: info.main.humidity,
    pressure: info.main.pressure,
    sea_level: info.main.sea_level,
    grnd_level: info.main.grnd_level,
    dt: info.dt,
  }
}
