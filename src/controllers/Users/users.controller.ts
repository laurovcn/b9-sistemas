import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log.interface'
import UsersInterface from '../../interfaces/users/users.interface'
import { LogService } from '../../services/log.service'

   const prisma = new PrismaClient()

   export const findAll = (request: Request, response: Response) => {

    try {     

      return response.json(prisma.users.findMany())

    } catch (error) {    
      
      const data = {
        description: 'Cannot find users'
      } as LogInterface

      LogService(data)

      return error
    }
  }

  export const create = async (request: Request, response: Response) => { 

    const data: UsersInterface = request.body
    
    try {  

      data.password = await bcrypt.hash(data.password, 10)
      
      await prisma.users.create({
        data
      })  

      return response.json({Message: 'Created user'})

    } catch (error) {  

      const data = {
        description: 'Cannot create users'
      } as LogInterface

      await LogService(data)

     return error
  }  
}

   export const update = async (request: Request, response: Response) => {

    try {
        
        const id: string = request.params.id
        const data: UsersInterface = request.body

        data.password = await bcrypt.hash(data.password, 10)
  
        await prisma.users.update({
          where: {
            id: Number(id),
          },
          data,
        })  

      return response.json({Message: `Update user with id: ${id}`})

    } catch (error) {

      const data = {
        description: 'Cannot update users'
      } as LogInterface

      await LogService(data)

      return error
    }
  }

   export const remove = async (request: Request, response: Response) => {

    const id: string = request.params.id

    try {

      await prisma.users.delete({
        where: {
          id: Number(id),
        },
      })

     return response.json({Message: `User with id: ${id} deleted`})

    } catch (error) {

      const data = {
        description: 'Cannot delete users'
      } as LogInterface

      await LogService(data)

      return error
    }
  }
