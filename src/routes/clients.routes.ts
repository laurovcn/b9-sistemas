import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.use(express.json())
router.get('/clients', async (req, res) => {
  const clients = await prisma.clients.findMany({
    skip: 0,
    take: 10,
  })
  res.json(clients)
})

export default router;