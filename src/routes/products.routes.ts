import express from 'express'
import ProductsController from '../controllers/products/products.controller'

const router = express.Router()

router.use(express.json())

router.get('/', async (req, res) => {
  return res.json( await ProductsController.findAll() )
})

router.post('/', async (req, res) => {
  return res.json( await ProductsController.create(req.body) ) 
  })

router.put('/:id', async (req, res) => { 
  return res.json( await ProductsController.update(req.params.id, req.body) )
  })

router.delete('/:id', async (req, res) => {
  return res.json( await ProductsController.delete(req.params.id) )
  })

export default router;