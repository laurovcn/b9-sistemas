import express from 'express'
import * as usersController from '../../controllers/Users/users.controller'

export const usersRouter = express.Router()

usersRouter.use(express.json())

usersRouter.get('/', usersController.findAll)

usersRouter.post('/', usersController.create)

usersRouter.put('/:id', usersController.update)

usersRouter.delete('/:id', usersController.remove)

