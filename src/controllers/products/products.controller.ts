import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log.interface'
import ProductsInterface from '../../interfaces/products/products.interface'
import { LogService } from '../../services/log.service'

const prisma = new PrismaClient()

export default class ProductsController {

   async findAll () {

    try {

      return await prisma.products.findMany()

    } catch (error) {

      const data = {
        description: 'Cannot find products'
      } as LogInterface

      await LogService(data)

      return error
    }
  }

   async create (request: Request, response: Response) { 

    const data: ProductsInterface = request.body
    
    try {  
      
       await prisma.products.create({
        data
      })  

      return response.json({ message: `Product registers ${data}` })

    } catch (error) { 

      const data = {
        description: 'Cannot create products'
      } as LogInterface

      await LogService(data) 

     return error
  }  
}

   async update (request: Request, response: Response) {

    try {
        
        const id: string = request.params.id
        const data: ProductsInterface = request.body 
  
        await prisma.products.update({
          where: {
            id: Number(id),
          },
          data,
        })  

        response.json({ message: `Product with id: ${id} updated`})

    } catch (error) {

      const data = {
        description: 'Cannot update products'
      } as LogInterface

      await LogService(data)

      return error
    }
  }

   async delete (request: Request, response: Response) {

    const id: string = request.params.id

    try {

      await prisma.products.delete({
        where: {
          id: Number(id),
        },
      })

      return response.json({ message: `Product with id: ${id} deleted`})

    } catch (error) {

      const data = {
        description: 'Cannot delete products'
      } as LogInterface

      await LogService(data)

      return error
    }
  }
}