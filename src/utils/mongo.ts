import mongoose from 'mongoose'
import { getConfig } from './config'

async function connectMongo (): Promise<void> {
  try {
    const token: string = getConfig().MONGODB_TOKEN
    if (!token) {
      throw new Error('Mongo database is not defined, could not connect')
    }
    await mongoose.connect(token)
    console.log('MongoDB connected.')
  } catch (error) {
    console.error(error)
    process.exit(-1)
  }
}

export { connectMongo }
