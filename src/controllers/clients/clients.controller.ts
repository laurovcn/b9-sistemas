import { PrismaClient } from '@prisma/client'
import ClientsInterface from '../../interfaces/clients/clients.interface'

const prisma = new PrismaClient()

export default class ClientsController {

  static async findAll () {

    try {

      return await prisma.clients.findMany()

    } catch (error) {

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

      return error
    }
  }
}