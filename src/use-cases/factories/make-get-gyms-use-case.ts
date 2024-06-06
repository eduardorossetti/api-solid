import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { GetManyGymsUseCase } from '../get-gyms'

export function makeGetManyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new GetManyGymsUseCase(gymsRepository)
  return useCase
}
