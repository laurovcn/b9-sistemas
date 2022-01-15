import express from 'express'
import * as transactionsController from '../../controllers/transactions/transactions.controller'

export const transactionsRouter = express.Router()

transactionsRouter.use(express.json())

transactionsRouter.get('/', transactionsController.findAll)

transactionsRouter.post('/', transactionsController.create)
