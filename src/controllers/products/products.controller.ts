import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log.interface'
import ProductsInterface from '../../interfaces/products/products.interface'
import { LogService } from '../../services/log.service'

  const prisma = new PrismaClient()

  export const findAll = (request: Request, response: Response) => {

  try {

    return response.json(prisma.products.findMany()) 

  } catch (error) {

    const data = {
      description: 'Cannot find products'
    } as LogInterface

    LogService(data)

    return error
  }
}

  export const create = async (request: Request, response: Response) => { 

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

  export const update = async (request: Request, response: Response) => {

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

  export const remove = async (request: Request, response: Response) => {

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
