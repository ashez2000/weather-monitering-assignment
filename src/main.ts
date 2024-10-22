import 'dotenv/config'
import { fetchWeatherInfo } from './open_weather_client.js'
import { saveToDb } from './db.js'

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

    console.log('###')
    for (const w of weatherInfos) {
      console.log(`loc: ${w.location}, temp: ${w.temp}`)
    }
    console.log('###')
  } catch (err) {
    console.log(err)
  }
}

setInterval(moniter, 5000)
