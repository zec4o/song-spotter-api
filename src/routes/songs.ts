import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'
import { checkSessionIdExists } from '../middleware/check-session-id-exists'
import { convertSecondsToMinutesAndSeconds } from '../middleware/convertSecondsToMinutes'

export async function songsRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const { sessionId } = request.cookies

      const songs = await knex('songs')
        .where('session_id', sessionId)
        .select('*')

      if (songs.length === 0) {
        return reply.status(404).send('You have no songs uploaded.')
      }

      return { songs }
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const { sessionId } = request.cookies

      const getSongsParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getSongsParamsSchema.parse(request.params)
      const songs = await knex('songs')
        .where({
          session_id: sessionId,
          id,
        })
        .first()

      if (!songs) {
        return reply
          .status(404)
          .send(
            'This song was not uploaded or you do not have permissions to access it. ',
          )
      }

      return { songs }
    },
  )

  app.post('/', async (request, reply) => {
    const createSongBodySchema = z.object({
      title: z.string(),
      author: z.string(),
      duration: z.number(),
    })

    const { title, author, duration } = createSongBodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()
      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    const id = randomUUID()

    await knex('songs').insert({
      id,
      title,
      author,
      duration: convertSecondsToMinutesAndSeconds(duration),
      session_id: sessionId,
      uploaded_at: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
      }),
    })

    return reply.status(201).send({
      id,
      title,
      author,
      duration: convertSecondsToMinutesAndSeconds(duration),
    })
  })

  app.delete(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const { sessionId } = request.cookies

      const getSongParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getSongParamsSchema.parse(request.params)

      await knex('songs').delete('*').where({
        session_id: sessionId,
        id,
      })

      return reply.status(204).send('Deleted.')
    },
  )
}
