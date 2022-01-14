import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import ClientsInterface from '../../interfaces/clients/clients.interface'
import LogInterface from '../../interfaces/log/log.interface'
import { LogService } from '../../services/log.service'

const prisma = new PrismaClient()

export default class ClientsController {

   async findAll () {

    try {

      return await prisma.clients.findMany()

    } catch (error) {

      const data = {
        description: 'Cannot find clients'
      } as LogInterface

      await LogService(data)

      return error
    }
  }

   async create (request: Request, response: Response) { 

    const data: ClientsInterface = request.body
    
    try {  
      
      await prisma.clients.create({
        data
      })  

      response.json({ message: `Client ${data} created` })

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
        const data: ClientsInterface = request.body 
  
        await prisma.clients.update({
          where: {
            id: Number(id),
          },
          data,
        })  

        return response.json({ message: `Client with id: ${data.id} updated`})

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

      await prisma.clients.delete({
        where: {
          id: Number(id),
        },
      })

      return response.json({ message: `Client with with id: ${id} deleted` })

    } catch (error) {

      const data = {
        description: 'Cannot delete products'
      } as LogInterface

      await LogService(data)

      return error
    }
  }
}