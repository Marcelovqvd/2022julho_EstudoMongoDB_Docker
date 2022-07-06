import { Router } from 'express'
import { BookModel } from '../model/book.js'

const routes = Router()

routes.post("/", async (request, response) => {
  const { title, author, hidden } = request.body

  const user = await BookModel.create({
    title, 
    author,
    date: new Date(),
    hidden
  })

  return response.json(user)
})

routes.get("/", async (request, response) => {
  const user = await BookModel.find()

  return response.json(user)
})

export { routes }