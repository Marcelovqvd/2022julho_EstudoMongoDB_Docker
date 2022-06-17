import { Router } from 'express'
import { UserModel } from '../model/user.js'

const routes = Router()

routes.post("/", async (request, response) => {
  const user = await UserModel.create({
    name: 'Marcelo'
  })
  console.log(user)
  return response.json(user)
})

routes.get("/", async (request, response) => {
  const user = await UserModel.find()
  console.log(user.name)
  return response.json(user)
})

export { routes }