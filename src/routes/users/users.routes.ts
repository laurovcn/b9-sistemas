import express from 'express'
import * as UsersController from '../../controllers/Users/users.controller'

export const usersRouter = express.Router()

usersRouter.use(express.json())

usersRouter.get('/', UsersController.findAll)

usersRouter.post('/', UsersController.create)

usersRouter.put('/:id', UsersController.update)

usersRouter.delete('/:id', UsersController.remove)

