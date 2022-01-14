import express from 'express'
import ClientsController from '../../controllers/clients/clients.controller'

export const clientsRouter = express.Router()

clientsRouter.use(express.json())

const controller = new ClientsController()

clientsRouter.get('/', controller.findAll.bind(controller))

clientsRouter.post('/', controller.create.bind(controller))

clientsRouter.put('/:id', controller.update.bind(controller))

clientsRouter.delete('/:id', controller.delete.bind(controller))
