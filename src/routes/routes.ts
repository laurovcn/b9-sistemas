import express from 'express'
import AuthCheck  from '../auth/auth.check'
import AuthGuard from '../auth/auth.guard'
import clientsRoutes from './clients.routes'
import productsRoutes from './products.routes'
import stockRoutes from './stock.routes'
import usersRoutes from './users.routes'

const app = express()
const router = express.Router()

const authGuard = AuthGuard
const authCheck = AuthCheck

app.use(express.json())

router.get('/login', async (req, res) => {
  res.json('Login Router')
})

router.post('/login', authGuard.login, async (req, res) => {
  res.json('Login Router')
})

router.use('/products', authCheck.auth, productsRoutes)
router.use('/clients', authCheck.auth, clientsRoutes)
router.use('/users', authCheck.auth, usersRoutes)
router.use('/stock', authCheck.auth, stockRoutes)

export default router;