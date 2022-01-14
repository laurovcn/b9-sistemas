import { PrismaClient } from '@prisma/client'
import LogInterface from '../../interfaces/log/log.interface'
import ProductsInterface from '../../interfaces/products/products.interface'
import { LogService } from '../../mongodb/mongo.service'

const prisma = new PrismaClient()

export default class ProductsController {

  static async findAll () {

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

  static async create (req: ProductsInterface) { 

    const data = req
    
    try {  
      
      return await prisma.products.create({
        data
      })  

    } catch (error) { 

      const data = {
        description: 'Cannot create products'
      } as LogInterface

      await LogService(data) 

     return error
  }  
}

  static async update (id: string, request: ProductsInterface) {

    try {
        
        const data = request 
  
        return await prisma.products.update({
          where: {
            id: Number(id),
          },
          data,
        })  

    } catch (error) {

      const data = {
        description: 'Cannot update products'
      } as LogInterface

      await LogService(data)

      return error
    }
  }

  static async delete (id: string) {

    try {

      await prisma.products.delete({
        where: {
          id: Number(id),
        },
      })

    } catch (error) {

      const data = {
        description: 'Cannot delete products'
      } as LogInterface

      await LogService(data)

      return error
    }
  }
}