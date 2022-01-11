import express from 'express'
import TransactionsController from '../../controllers/transactions/transactions.controller'

const router = express.Router()

router.use(express.json())

router.get('/', async (req, res) => {
  return res.json( await TransactionsController.findAll() )
})

router.post('/', async (req, res) => {
  return res.json( await TransactionsController.create(req.body) ) 
  })

export default router;