import { makeGetManyGymsUseCase } from '@/use-cases/factories/make-get-gyms-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function getMany(request: FastifyRequest, reply: FastifyReply) {
  const getManyUseCase = makeGetManyGymsUseCase()
  const { gyms } = await getManyUseCase.execute()

  return reply.status(200).send({ gyms })
}
