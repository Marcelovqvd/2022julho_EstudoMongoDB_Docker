import express from 'express'
import dotenv from 'dotenv'
import { routes } from './routes/user.routes.js'

import './database/db.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(routes)

const port = process.env.SERVER_PORT

app.listen(port, () => console.log(`Running at ${port}`))