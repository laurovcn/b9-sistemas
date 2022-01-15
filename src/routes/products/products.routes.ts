import express from 'express'
import * as productsController from '../../controllers/products/products.controller'

export const productsRouter = express.Router()

productsRouter.use(express.json())

productsRouter.get('/', productsController.findAll)

productsRouter.post('/', productsController.create)

productsRouter.put('/:id', productsController.update)

productsRouter.delete('/:id', productsController.remove)
