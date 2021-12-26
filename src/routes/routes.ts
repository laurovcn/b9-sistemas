import express from 'express'
import clientsRoutes from './clients.routes'
import productsRoutes from './products.routes'
import stockRoutes from './stock.routes'
import usersRoutes from './users.routes'
const app = express()

const router = express.Router()

app.use(express.json())

router.post('/login', async (req, res) => {
  res.json("Login Router")
})

router.use('/products', productsRoutes)
router.use('/clients', clientsRoutes)
router.use('/users', usersRoutes)
router.use('/stock', stockRoutes)

export default router;