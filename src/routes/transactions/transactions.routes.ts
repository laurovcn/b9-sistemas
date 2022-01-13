import express, { Request, Response } from 'express'
import TransactionsController from '../../controllers/transactions/transactions.controller'

export const transactionsRouter = express.Router()

transactionsRouter.use(express.json())

transactionsRouter.get('/', async (req: Request, res: Response)=> {
  return res.json( await TransactionsController.findAll() )
})

transactionsRouter.post('/', async (req: Request, res: Response)=> {
  return res.json( await TransactionsController.create(req.body) ) 
  })
