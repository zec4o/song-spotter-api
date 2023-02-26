import fastify from 'fastify'
import { songsRoutes } from './routes/songs'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)

app.register(songsRoutes, {
  prefix: 'songs',
})
