import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { GetManyGymsUseCase } from './get-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: GetManyGymsUseCase

describe('Get Gyms Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new GetManyGymsUseCase(gymsRepository)
  })

  it('should be able to get gyms', async () => {
    for (let i = 1; i <= 10; i++) {
      await gymsRepository.create({
        title: `Javascript Gym ${i}`,
        description: null,
        latitude: -22.222623,
        longitude: -50.8768549,
        phone: null,
      })
    }

    const { gyms } = await sut.execute()

    expect(gyms).toHaveLength(10)
    for (let i = 1; i <= 10; i++) {
      expect(gyms).toContainEqual(
        expect.objectContaining({ title: `Javascript Gym ${i}` }),
      )
    }
  })
})
