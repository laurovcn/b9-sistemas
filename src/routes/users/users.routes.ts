import express, { Request, Response } from 'express'
import UsersController from '../../controllers/Users/users.controller'

export const usersRouter = express.Router()

usersRouter.use(express.json())

usersRouter.get('/', async (req: Request, res: Response) => {
   return res.json( await UsersController.findAll() )
})

usersRouter.post('/', async (req: Request, res: Response) => {
 return res.json( await UsersController.create(req.body) ) 
})

usersRouter.put('/:id', async (req: Request, res: Response) => { 
  return res.json( await UsersController.update(req.params.id, req.body) )
})

usersRouter.delete('/:id', async (req: Request, res: Response) => {
  return res.json( await UsersController.delete(req.params.id) )
})

