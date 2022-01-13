import express, { Request, Response } from "express";
import AuthCheck  from '../auth/auth.check'
import AuthGuard from '../auth/auth.guard'
import { clientsRouter } from './clients/clients.routes'
import { productsRouter } from './products/products.routes'
import { usersRouter }from './users/users.routes'
import { transactionsRouter }from './transactions/transactions.routes'

const app = express()

export const router = express.Router()

app.use(express.json())

router.get('/', async (req: Request, res: Response) => {
  res.json('Welcome to B9 System Project')
})

router.post('/login', AuthGuard.login)

router.use('/products', AuthCheck.auth, productsRouter)
router.use('/clients', AuthCheck.auth, clientsRouter)
router.use('/users', AuthCheck.auth, usersRouter)
router.use('/transactions', AuthCheck.auth, transactionsRouter)

