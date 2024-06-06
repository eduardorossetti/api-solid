import request from 'supertest'
import { app } from '@/app'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

describe('Register (e2e)', async () => {
  beforeEach(async () => {
    await app.ready()
  })

  afterEach(async () => {
    await app.close()
  })

  it('should be able to register', async () => {
    const response = await request(app.server).post('/users').send({
      name: 'Eduardo',
      email: 'edurossettimelo@hotmail.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(201)
  })
})
