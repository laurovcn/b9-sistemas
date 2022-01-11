import express from 'express'
import ClientsController from '../controllers/Users/clients.controller'

const router = express.Router()

router.use(express.json())

router.get('/', async (req, res) => {
  return res.json( await ClientsController.findAll() )
})

router.post('/', async (req, res) => {
return res.json( await ClientsController.create(req.body) ) 
})

router.put('/:id', async (req, res) => { 
 return res.json( await ClientsController.update(req.params.id, req.body) )
})

router.delete('/:id', async (req, res) => {
 return res.json( await ClientsController.delete(req.params.id) )
})

export default router;