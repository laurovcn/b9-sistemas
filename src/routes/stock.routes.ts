import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.use(express.json())
router.get('/stock', async (req, res) => {
  const stock = await prisma.stock.findMany({
    skip: 0,
    take: 10,
  })
  res.json(stock)
})

export default router;