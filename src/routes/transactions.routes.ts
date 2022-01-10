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

  const id = req.body.productId
  
  const check = await prisma.products.findUnique({
    where: { id },
  })

  if (check && check.quantity > 0) {

    const data = req.body
    const result = await prisma.transactions.create({
      data,
    })

     await prisma.products.update({
      where: { id },
      data: { quantity: check.quantity - 1 }
    }) 

  return res.json(result) 
  } 

  return res.json({message: 'Product not available'})
})

export default router;