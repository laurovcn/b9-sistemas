import { PrismaClient } from '@prisma/client'
import ProductsInterface from '../../interfaces/products.interface'

const prisma = new PrismaClient()

export default class ProductsController {

  static async findAll () {

    try {

      return await prisma.products.findMany()

    } catch (error) {

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

      return error
    }
  }
}