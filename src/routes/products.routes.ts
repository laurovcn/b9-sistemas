import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.use(express.json())

router.get('/', async (req, res) => {
  const products = await prisma.products.findMany({
    skip: 0,
    take: 10,
  })
  res.json(products)
})

router.post('/', async (req, res) => {
  const data = req.body
  const result = await prisma.products.create({
    data,
  })
  res.json(result)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const data = req.body
  const post = await prisma.products.update({
    where: { id: Number(id) },
    data
  })
  res.json(post)
})

router.put('/quantity/:id', async (req, res) => {
  const { id } = req.params
  const data = req.body
  const post = await prisma.products.update({
    where: { id: Number(id) },
    data: { quantity: data.quantity } 
  })
  res.json(post)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.products.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

export default router;