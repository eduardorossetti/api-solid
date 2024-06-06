import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'
import os from 'os'

export async function readiness(request: FastifyRequest, reply: FastifyReply) {
  const prisma = new PrismaClient()

  try {
    await prisma.$queryRaw`SELECT 1`
    const cpuUsage = os.loadavg()[0]
    const totalMemory = os.totalmem()
    const freeMemory = os.freemem()
    const totalDiskSpace = os.totalmem()
    const freeDiskSpace = os.freemem()

    reply.send({
      status: 'ready',
      systemInfo: {
        cpuUsage,
        totalMemory,
        freeMemory,
        totalDiskSpace,
        freeDiskSpace,
      },
    })
  } catch (error) {
    reply
      .status(500)
      .send({ status: 'error', message: 'Error connecting to the database' })
  } finally {
    await prisma.$disconnect()
  }
}
