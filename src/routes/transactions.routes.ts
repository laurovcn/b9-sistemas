import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.use(express.json())

router.get('/', async (req, res) => {
  const transactions = await prisma.transactions.findMany({
    skip: 0,
    take: 10,
  })
  res.json(transactions)
})

router.post('/', async (req, res) => {
  const data = req.body
  const result = await prisma.transactions.create({
    data,
  })
  res.json(result)
})

export default router;