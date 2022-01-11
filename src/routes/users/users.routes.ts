import express from 'express'
import UsersController from '../../controllers/Users/users.controller'

const router = express.Router()

router.use(express.json())

router.get('/', async (req, res) => {
   return res.json( await UsersController.findAll() )
})

router.post('/', async (req, res) => {
 return res.json( await UsersController.create(req.body) ) 
})

router.put('/:id', async (req, res) => { 
  return res.json( await UsersController.update(req.params.id, req.body) )
})

router.delete('/:id', async (req, res) => {
  return res.json( await UsersController.delete(req.params.id) )
})

export default router;