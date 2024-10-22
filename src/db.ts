import { PrismaClient } from '@prisma/client'
import { WeatherInfo } from './open_weather_client.js'

const db = new PrismaClient()

export async function saveToDb(data: WeatherInfo[]) {
  return await db.weatherInfo.createMany({
    data: data,
  })
}
