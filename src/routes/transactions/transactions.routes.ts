import express from 'express'
import * as TransactionsController from '../../controllers/transactions/transactions.controller'

export const transactionsRouter = express.Router()

transactionsRouter.use(express.json())

transactionsRouter.get('/', TransactionsController.findAll)

transactionsRouter.post('/', TransactionsController.create)
