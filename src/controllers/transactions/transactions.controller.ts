import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log.interface'
import TransactionsInterface from '../../interfaces/transactions/transactions'
import { logService } from '../../services/log.service'

const prisma = new PrismaClient()

  export const findAll = async (request: Request, response: Response) => {

    try {

      const currentPage: any = request.query.page || 1;
      const take: number = 10;
      const skip = (currentPage - 1) * take;

      return response.json(await prisma.transactions.findMany(
        {
          skip,
          take
        }
      )) 

    } catch (error) {

      const data = {
        description: 'Cannot find transactions'
      } as LogInterface

      await logService(data)

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

      await logService(data)

      return error
    }  
}
