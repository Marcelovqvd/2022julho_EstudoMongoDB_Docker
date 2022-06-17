import express from 'express'
import dotenv from 'dotenv'
import './database/db.js'
import { UserModel } from './model/user.js'

dotenv.config()
const app = express()
app.use(express.json())

const port = process.env.PORT || 3333

app.get("/", (request, response) => {
  const user = UserModel.create({
    name: 'Marcelo'
  })
  return response.json(user)
})

app.listen(port, () => console.log(`Running at ${port}`))