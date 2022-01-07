import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.use(express.json())

router.get('/', async (req, res) => {
  const transaction = await prisma.productsOnClients.findMany({
    skip: 0,
    take: 10,
  })
  res.json(transaction)
})

router.post('/', async (req, res) => {
  const data = req.body
  const transaction = await prisma.productsOnClients.create({
    data,
  })
  res.json(transaction)
})

export default router;