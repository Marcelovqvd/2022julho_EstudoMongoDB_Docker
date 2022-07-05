import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

mongoose.connect(
  `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    useNewUrlParser: true,
  }
)

mongoose.connection.on('error', () => console.error('connection error:'))
mongoose.connection.once('open', () => console.log('database connected'))