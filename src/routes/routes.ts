import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  res.json("Hello World")
})

router.get('/products', async (req, res) => {
  const products = await prisma.products.findMany({
    skip: 0,
    take: 10,
  })
  res.json(products)
})

export default router;