import express, { Request, Response } from 'express'
import ClientsController from '../../controllers/clients/clients.controller'

export const clientsRouter = express.Router()

clientsRouter.use(express.json())

clientsRouter.get('/', async (req: Request, res: Response) => {
  return res.json( await ClientsController.findAll() )
})

clientsRouter.post('/', async (req: Request, res: Response) => {
return res.json( await ClientsController.create(req.body) ) 
})

clientsRouter.put('/:id', async (req: Request, res: Response) => { 
 return res.json( await ClientsController.update(req.params.id, req.body) )
})

clientsRouter.delete('/:id', async (req: Request, res: Response) => {
 return res.json( await ClientsController.delete(req.params.id) )
})
