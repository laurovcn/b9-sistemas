import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log.interface'
import UsersInterface from '../../interfaces/users/users.interface'
import { LogService } from '../../services/log.service'

const prisma = new PrismaClient()
export default class UsersController {

   async findAll () {

    try {     

      return await prisma.users.findMany()

    } catch (error) {    
      
      const data = {
        description: 'Cannot find users'
      } as LogInterface

      await LogService(data)

      return error
    }
  }


   async create (request: Request, response: Response) { 

    const data: UsersInterface = request.body
    
    try {  

      data.password = await bcrypt.hash(data.password, 10)
      
      await prisma.users.create({
        data
      })  

      return response.json({Message: `Created user ${data}`})

    } catch (error) {  

      const data = {
        description: 'Cannot create users'
      } as LogInterface

      await LogService(data)

     return error
  }  
}

   async update (request: Request, response: Response) {

    try {
        
        const data: UsersInterface = request.body

        data.password = await bcrypt.hash(data.password, 10)
  
        await prisma.users.update({
          where: {
            id: Number(data.id),
          },
          data,
        })  

      return response.json({Message: `Update user with id: ${data.id}`})

    } catch (error) {

      const data = {
        description: 'Cannot update users'
      } as LogInterface

      await LogService(data)

      return error
    }
  }

   async delete (request: Request, response: Response) {

    const data: UsersInterface = request.body.id

    try {

      await prisma.users.delete({
        where: {
          id: Number(data.id),
        },
      })

     return response.json({Message: `User with id: ${data.id} deleted`})

    } catch (error) {

      const data = {
        description: 'Cannot delete users'
      } as LogInterface

      await LogService(data)

      return error
    }
  }
}