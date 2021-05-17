/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import Podcast from 'App/Models/Podcast'
import User from 'App/Models/User'
import PodcastValidator from 'App/Validators/PodcastValidator'
import UserModifyValidator from 'App/Validators/UserModifyValidator'
import UserValidator from 'App/Validators/UserValidator'

Route.get('/users', async () => {
  return { hello: 'world' }
})
// Route pour crée un utilisateur.
Route.post('/users', async ({ request, response, auth }) => {
  const payload = await request.validate(UserValidator)
  await User.create(payload)
  try {
    const token = await auth.use('api').attempt(payload.email, payload.password)
    return token
  } catch {
    return response.status(401).send('Invalid credentials')
  }
})
// Route pour supprimer un utilisateur avec son id.
Route.delete('/users/:id', async ({ params }) => {
  const userid = params.id
  const user = await User.findOrFail(userid)
  await user.delete()
})

Route.get('/users/email/:email', async ({ params, response }) => {
  const emailToCheck = params.email
  response.send(await User.findByOrFail('email', emailToCheck))
})

Route.post('login', async ({ request, response, auth }) => {
  const email = request.input('email')
  const password = request.input('password')
  try {
    const token = await auth.use('api').attempt(email, password)
    return token
  } catch {
    return response.status(401).send('Invalid credentials')
  }
})

Route.get('/users/me', async ({ response, auth }) => {
  await auth.use('api').authenticate()
  return auth.use('api').user
})

Route.post('/users/setInfo', async ({ response, auth, params, request }) => {
  const user = await auth.use('api').authenticate()
  const payload = await request.validate(UserModifyValidator)
  const searchPayload = { id: user.id }
  const otherPayload = {
    email: payload.email,
    first_name: payload.firstName,
    name: payload.name,
  }
  await User.updateOrCreate(searchPayload, otherPayload)
})

// PODCAST

Route.post('/podcast', async ({ request, response }) => {
  const payload = await request.validate(PodcastValidator)
  const newPodcast = await Podcast.create(payload)
  return newPodcast
})

Route.get('/podcast/all', async ({ request, response }) => {
  return Database.from('podcasts').select('*')
})
