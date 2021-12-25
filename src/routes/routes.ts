import express from 'express'
const app = express()

const router = express.Router()

app.use(express.json())
router.get('/', async (req, res) => {
  res.json("You can access routes:/users /clients /products and /stock")
})

export default router;