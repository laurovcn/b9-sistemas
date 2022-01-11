import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import UsersController from '../controllers/Users/users.controller'

const router = express.Router()

const prisma = new PrismaClient()

router.use(express.json())

router.get('/', async (req, res) => {
   return res.json( await UsersController.findAll() )
})

router.post('/', async (req, res) => {
 return res.json( await UsersController.create(req.body) ) 
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const data = req.body

  data.password = await bcrypt.hash(data.password, 10);
  
  const post = await prisma.users.update({
    where: { id: Number(id) },
    data
  })
  res.json(post)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.users.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

export default router;