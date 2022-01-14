import { PrismaClient } from '@prisma/client'
import LogInterface from '../../interfaces/log/log.interface'
import TransactionsInterface from '../../interfaces/transactions/transactions'
import { LogService } from '../../services/log.service'

const prisma = new PrismaClient()

export default class TransactionsController {

  static async findAll () {

    try {

      return await prisma.transactions.findMany()

    } catch (error) {

      const data = {
        description: 'Cannot find transactions'
      } as LogInterface

      await LogService(data)

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


      const data = {
        description: 'Cannot create transactions'
      } as LogInterface

      await LogService(data)

     return error
    }  
  }
}