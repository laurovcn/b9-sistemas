import { PrismaClient } from '@prisma/client'
import ClientsInterface from '../../interfaces/clients/clients.interface'
import LogInterface from '../../interfaces/log/log.interface'
import { LogService } from '../../mongodb/mongo.service'

const prisma = new PrismaClient()

export default class ClientsController {

  static async findAll () {

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

  static async create (req: ClientsInterface) { 

    const data = req
    
    try {  
      
      return await prisma.clients.create({
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

  static async update (id: string, request: ClientsInterface) {

    try {
        
        const data = request 
  
        return await prisma.clients.update({
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

      await prisma.clients.delete({
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