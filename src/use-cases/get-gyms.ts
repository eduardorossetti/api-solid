import { GymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface GetManyGymsUseCaseResponse {
  gyms: Gym[]
}

export class GetManyGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute(): Promise<GetManyGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.getMany()

    return {
      gyms,
    }
  }
}
