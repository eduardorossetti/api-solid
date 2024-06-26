import { FastifyRequest, FastifyReply } from 'fastify'

export async function liveness(request: FastifyRequest, reply: FastifyReply) {
  reply.send({ status: 'ok' })
}
