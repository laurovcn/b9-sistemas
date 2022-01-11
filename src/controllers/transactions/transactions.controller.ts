import { PrismaClient } from '@prisma/client'
import TransactionsInterface from '../../interfaces/transactions/transactions'

const prisma = new PrismaClient()

export default class TransactionsController {

  static async findAll () {

    try {

      return await prisma.transactions.findMany()

    } catch (error) {

      return error
    }
  }

  static async create (req: TransactionsInterface) {     
    
    try {  

      const data: TransactionsInterface  = req
        
      const id = data.productsId
      
      const check = await prisma.products.findUnique({
        where: { id },
      })

      if (check && check.quantity !== 0) {

         await prisma.transactions.createMany({
          data
        })

        await prisma.products.update({
          where: { id },
          data: { quantity: check.quantity - 1 }
        }) 

      return data

      } 

      return JSON.stringify({message: 'Not Product Found'})

     } catch (error) {  

     return error
    }  
  }
}