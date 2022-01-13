import express, { Request, Response } from 'express'
import ProductsController from '../../controllers/products/products.controller'

export const productsRouter = express.Router()

productsRouter.use(express.json())

productsRouter.get('/', async (req: Request, res: Response) => {
  return res.json( await ProductsController.findAll() )
})

productsRouter.post('/', async (req, res) => {
  return res.json( await ProductsController.create(req.body) ) 
  })

productsRouter.put('/:id', async (req, res) => { 
  return res.json( await ProductsController.update(req.params.id, req.body) )
  })

productsRouter.delete('/:id', async (req, res) => {
  return res.json( await ProductsController.delete(req.params.id) )
  })
