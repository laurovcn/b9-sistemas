import express from 'express'
import  * as clientsController from '../../controllers/clients/clients.controller'

export const clientsRouter = express.Router()

clientsRouter.use(express.json())

clientsRouter.get('/', clientsController.findAll)

clientsRouter.post('/', clientsController.create)

clientsRouter.put('/:id', clientsController.update)

clientsRouter.delete('/:id', clientsController.remove)
