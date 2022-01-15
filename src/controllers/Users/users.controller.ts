import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log.interface'
import UsersInterface from '../../interfaces/users/users.interface'
import { logService } from '../../services/log.service'

   const prisma = new PrismaClient()

   export const findAll = async (request: Request, response: Response) => {    

    try {             

      return response.json(await prisma.users.findMany({
        skip: 0,
        take: 10,
      }))

    } catch (error) {    
      
      const data = {
        description: 'Cannot find users'
      } as LogInterface

      await logService(data)

      return error
    }
  }

  export const create = async (request: Request, response: Response) => { 

    const data: UsersInterface = request.body
    
    try {  

      data.password = await bcrypt.hash(data.password, 10)
              
      return response.json(await prisma.users.create({
        data
      }))

    } catch (error) {  

      const data = {
        description: 'Cannot create users'
      } as LogInterface

      await logService(data)

     return error
  }  
}

  export const update = async (request: Request, response: Response) => {

    try {
        
        const id: string = request.params.id
        const data: UsersInterface = request.body

        data.password = await bcrypt.hash(data.password, 10)
           
      return response.json(await prisma.users.update({
        where: {
          id: Number(id),
        },
        data,
      }) )

    } catch (error) {

      const data = {
        description: 'Cannot update users'
      } as LogInterface

      await logService(data)

      return error
    }
  }

   export const remove = async (request: Request, response: Response) => {

    const id: string = request.params.id

    try {
     
      return response.json( await prisma.users.delete({
        where: {
          id: Number(id),
        },
      }))

    } catch (error) {

      const data = {
        description: 'Cannot delete users'
      } as LogInterface

      await logService(data)

      return error
    }
  }
