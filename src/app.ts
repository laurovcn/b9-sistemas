import express from 'express'
import routes from './routes/routes'

const port = 3001
const app = express()

app.use(express.json())
app.use(routes)

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}`),
)
