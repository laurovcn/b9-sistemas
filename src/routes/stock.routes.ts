import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.use(express.json())

router.get('/', async (req, res) => {
  const stock = await prisma.stock.findMany({
    skip: 0,
    take: 10,
  })
  res.json(stock)
})

router.post('/', async (req, res) => {
  const data = req.body
  const result = await prisma.stock.create({
    data,
  })
  res.json(result)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const { data } = req.body
    const updatedPost = await prisma.stock.update({
      where: { id: Number(id) }, data
     
    })
    res.json(updatedPost)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.stock.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

export default router;