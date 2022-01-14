import express from 'express'
import * as ProductsController from '../../controllers/products/products.controller'

export const productsRouter = express.Router()

productsRouter.use(express.json())

productsRouter.get('/', ProductsController.findAll)

productsRouter.post('/', ProductsController.create)

productsRouter.put('/:id', ProductsController.update)

productsRouter.delete('/:id', ProductsController.remove)
