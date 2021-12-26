import express from 'express'
const port = 3001
const app = express()

import routes from './routes/routes'

app.use(express.json())
app.use(routes)

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}`),
)
