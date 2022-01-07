import express from 'express'
import AuthCheck  from '../auth/auth.check'
import AuthGuard from '../auth/auth.guard'
import clientsRoutes from './clients.routes'
import productsRoutes from './products.routes'
import transactionsRoutes from './transactions.routes'
import usersRoutes from './users.routes'

const app = express()
const router = express.Router()

const authGuard = AuthGuard
const authCheck = AuthCheck

app.use(express.json())

router.get('/', async (req, res) => {
  res.json('Welcome to B9 System Project')
})

router.post('/login', authGuard.login, async (req, res) => {
  res.json('Login Router')
})

router.use('/products', authCheck.auth, productsRoutes)
router.use('/clients', authCheck.auth, clientsRoutes)
router.use('/users', authCheck.auth, usersRoutes)
router.use('transactions', authCheck.auth, transactionsRoutes)

export default router;