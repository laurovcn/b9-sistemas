import express, { Request, Response } from "express";
import * as authCheck  from '../auth/auth.check'
import * as authGuard from '../auth/auth.guard'
import { clientsRouter } from './clients/clients.routes'
import { productsRouter } from './products/products.routes'
import { usersRouter }from './users/users.routes'
import { transactionsRouter }from './transactions/transactions.routes'

const app = express()

export const router = express.Router()

app.use(express.json())

router.get('/', async (request: Request, response: Response) => {
  response.json('Welcome to B9 System Project')
})

router.post('/login', authGuard.login)

router.use('/products', authCheck.auth, productsRouter)
router.use('/clients', authCheck.auth, clientsRouter)
router.use('/users', authCheck.auth, usersRouter)
router.use('/transactions', authCheck.auth, transactionsRouter)

