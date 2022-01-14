import express from 'express'
import ProductsController from '../../controllers/products/products.controller'

export const productsRouter = express.Router()

productsRouter.use(express.json())

const controller = new ProductsController()

productsRouter.get('/', controller.findAll.bind(controller))

productsRouter.post('/', controller.create.bind(controller))

productsRouter.put('/:id', controller.update.bind(controller))

productsRouter.delete('/:id', controller.delete.bind(controller))
