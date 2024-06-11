import request from 'supertest'
import { app } from '@/app'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createAndAuthUser } from '@/utils/test/create-and-auth-user'

describe('Create Gym (e2e)', async () => {
  beforeEach(async () => {
    await app.ready()
  })

  afterEach(async () => {
    await app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthUser(app, true)

    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'Some description',
        phone: '11996454493',
        latitude: -27.2072052,
        longitude: -49.6401091,
      })

    expect(response.statusCode).toEqual(201)
  })
})
