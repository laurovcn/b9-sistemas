import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log.interface'
import TransactionsInterface from '../../interfaces/transactions/transactions'
import { LogService } from '../../services/log.service'

const prisma = new PrismaClient()

  export const findAll = async (response: Response) => {

    try {

      return response.json(await prisma.transactions.findMany()) 

    } catch (error) {

      const data = {
        description: 'Cannot find transactions'
      } as LogInterface

      await LogService(data)

      return error
    }
  }

   export const create = async (request: Request, response: Response) => {     
    
    try {  

      const data: TransactionsInterface  = request.body
        
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

      return response.json({ message: 'Transaction Complete'})

      } 

      return response.json({message: 'Not Product Found'})

      } catch (error) {  

      const data = {
        description: 'Cannot create transactions'
      } as LogInterface

      await LogService(data)

      return error
    }  
}
