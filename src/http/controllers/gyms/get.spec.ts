import request from 'supertest'
import { app } from '@/app'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createAndAuthUser } from '@/utils/test/create-and-auth-user'

describe('Get Gyms (e2e)', async () => {
  beforeEach(async () => {
    await app.ready()
  })

  afterEach(async () => {
    await app.close()
  })

  it('should be able to get gyms', async () => {
    const { token } = await createAndAuthUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'Some description.',
        phone: '1199999999',
        latitude: -27.2092052,
        longitude: -49.6401091,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'TypeScript Gym',
        description: 'Some description.',
        phone: '1199999999',
        latitude: -27.0610928,
        longitude: -49.5229501,
      })

    const response = await request(app.server).get('/consulta-dados').send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(2)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        id: expect.any(String),
      }),
      expect.objectContaining({
        id: expect.any(String),
      }),
    ])
  })
})
