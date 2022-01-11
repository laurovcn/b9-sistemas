import express from 'express'
import AuthCheck  from '../auth/auth.check'
import AuthGuard from '../auth/auth.guard'
import clientsRoutes from './clients/clients.routes'
import productsRoutes from './products/products.routes'
import usersRoutes from './users/users.routes'
import transactionsRoutes from './transactions/transactions.routes'

const app = express()
const router = express.Router()

app.use(express.json())

router.get('/', async (req, res) => {
  res.json('Welcome to B9 System Project')
})

router.post('/login', AuthGuard.login)

router.use('/products', AuthCheck.auth, productsRoutes)
router.use('/clients', AuthCheck.auth, clientsRoutes)
router.use('/users', AuthCheck.auth, usersRoutes)
router.use('/transactions', AuthCheck.auth, transactionsRoutes)

export default router;