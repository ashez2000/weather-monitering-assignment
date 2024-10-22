import 'dotenv/config'
import { fetchWeatherInfo } from './open_weather_client.js'

async function main() {
  const info = await fetchWeatherInfo('Delhi')
  console.log(info)
}

main()
