import express from 'express'
import auth from '../middleware/auth'
import authController from '../controllers/auth.controller'
import clientsRoutes from './clients.routes'
import productsRoutes from './products.routes'
import stockRoutes from './stock.routes'
import usersRoutes from './users.routes'
const app = express()

const router = express.Router()

app.use(express.json())

router.get('/login', async (req, res) => {
  res.json("Login Router")
})

router.post('/login', authController.login, async (req, res) => {
  res.json("Login Router")
})

router.use('/products', auth, productsRoutes)
router.use('/clients', auth, clientsRoutes)
router.use('/users', auth, usersRoutes)
router.use('/stock', auth, stockRoutes)

export default router;