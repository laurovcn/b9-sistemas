import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import UsersInterface from '../../interfaces/users.dto';

const prisma = new PrismaClient()

export default class UsersController {
  static async create (user: UsersInterface): Promise<UsersInterface> { 
    const data = user

    data.password = await bcrypt.hash(data.password, 10);

    const result = await prisma.users.create({
      data: data
      
    })
   return result
  } 
}