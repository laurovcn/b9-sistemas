import express from 'express'
import  * as ClientsController from '../../controllers/clients/clients.controller'

export const clientsRouter = express.Router()

clientsRouter.use(express.json())

clientsRouter.get('/', ClientsController.findAll)

clientsRouter.post('/', ClientsController.create)

clientsRouter.put('/:id', ClientsController.update)

clientsRouter.delete('/:id', ClientsController.remove)
