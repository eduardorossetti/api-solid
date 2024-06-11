import { FastifyInstance } from 'fastify'
import { search } from './search'
import { nearby } from './nearby'
import { create } from './create'
import { getMany } from './get'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'

export async function gymsRoutes(app: FastifyInstance) {
  app.get('/gyms/search', { onRequest: [verifyJwt] }, search)
  app.get('/gyms/nearby', { onRequest: [verifyJwt] }, nearby)
  app.post('/gyms', { onRequest: [verifyJwt, verifyUserRole('ADMIN')] }, create)
  app.get('/consulta-dados', getMany)
}
