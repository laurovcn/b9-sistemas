import express from 'express'
const port = 3001
const app = express()

import routes from './routes/routes'
import clientsRoutes from './routes/clients.routes'
import productsRoutes from './routes/products.routes'
import stockRoutes from './routes/stock.routes'
import usersRoutes from './routes/users.routes'

app.use(express.json())
app.use(routes)
app.use('/products', productsRoutes)
app.use('/clients', clientsRoutes)
app.use('/users', usersRoutes)
app.use('/stock', stockRoutes)


app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}`),
)
