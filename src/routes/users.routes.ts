import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.use(express.json())
router.get('/users', async (req, res) => {
  const users = await prisma.users.findMany({
    skip: 0,
    take: 10,
  })
  res.json(users)
})

export default router;