import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log.interface'
import ProductsInterface from '../../interfaces/products/products.interface'
import { logService } from '../../services/log.service'

  const prisma = new PrismaClient()

  export const findAll = async (request: Request, response: Response) => {

    try {

      const currentPage: any = request.query.page || 1;
      const take: number = 10;
      const skip = (currentPage - 1) * take;

      return response.json(await prisma.products.findMany(
        {
          skip,
          take
        }
      )) 

    } catch (error) {

      const data = {
        description: 'Cannot find products'
      } as LogInterface

      await logService(data)

      return error
    }
}

export const create = async (request: Request, response: Response) => { 

  const data: ProductsInterface = request.body
  
  try {       

    return response.json(await prisma.products.create({
      data
    }) )

  } catch (error) {  

    const data = {
      description: 'Cannot create products'
    } as LogInterface

    await logService(data)

    return error
}  
}

  export const update = async (request: Request, response: Response) => {

    try {
        
        const id: string = request.params.id
        const data: ProductsInterface = request.body          

        return response.json(await prisma.products.update({
          where: {
            id: Number(id),
          },
          data,
        }) )

    } catch (error) {

      const data = {
        description: 'Cannot update products'
      } as LogInterface

      await logService(data)

      return error
    }
}

  export const remove = async (request: Request, response: Response) => {

    const id: string = request.params.id

    try {     

      return response.json(await prisma.products.delete({
        where: {
          id: Number(id),
        },
      }))

    } catch (error) {

      const data = {
        description: 'Cannot delete products'
      } as LogInterface

      await logService(data)

      return error
    }
}
