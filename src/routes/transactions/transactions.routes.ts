import express from 'express'
import TransactionsController from '../../controllers/transactions/transactions.controller'

export const transactionsRouter = express.Router()

transactionsRouter.use(express.json())

const controller = new TransactionsController()

transactionsRouter.get('/', controller.findAll.bind(controller))

transactionsRouter.post('/', controller.create.bind(controller))
