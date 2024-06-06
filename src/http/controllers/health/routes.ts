import { FastifyInstance } from 'fastify'
import { readiness } from './readliness'
import { liveness } from './liveness'

export async function healthRoutes(app: FastifyInstance) {
  app.get('/liveness', liveness)
  app.get('/readiness', readiness)
}
