import 'dotenv/config'

import { fetchWeatherInfo, WeatherInfo } from './open_weather_client.js'
import { saveToDb } from './db.js'
import { notify } from './notify.js'

const locations = [
  'Delhi',
  'Mumbai',
  'Chennai',
  'Bangalore',
  'Kolkata',
  'Hyderabad',
]

async function moniter() {
  try {
    const weatherInfos = await Promise.all(
      locations.map((l) => fetchWeatherInfo(l))
    )

    await saveToDb(weatherInfos)

    for (const w of weatherInfos) {
      if (exceededThreshold(w)) {
        notify(w)
      }
    }

    console.log('###')
    for (const w of weatherInfos) {
      console.log(`loc: ${w.location}, temp: ${w.temp}`)
    }
    console.log('###')
  } catch (err) {
    console.log(err)
  }
}

/** Weather threshold logic for triggering notifications */
function exceededThreshold(weatherInfo: WeatherInfo) {
  if (weatherInfo.temp > 35) return true
  return false
}

setInterval(moniter, 5000)
