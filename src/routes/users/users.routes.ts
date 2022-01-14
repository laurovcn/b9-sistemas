import express from 'express'
import UsersController from '../../controllers/Users/users.controller'

export const usersRouter = express.Router()

usersRouter.use(express.json())

const controller = new UsersController()

usersRouter.get('/', controller.findAll.bind(controller))

usersRouter.post('/', controller.create.bind(controller))

usersRouter.put('/:id', controller.update.bind(controller))

usersRouter.delete('/:id', controller.delete.bind(controller))

