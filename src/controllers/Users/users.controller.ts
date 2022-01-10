import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import UsersInterface from '../../interfaces/users.dto';

const prisma = new PrismaClient()
export default class UsersController {
  static async create (req: any): Promise<UsersInterface> { 

   const data: UsersInterface = req
    
   data.password = await bcrypt.hash(data.password, 10);

    await prisma.users.create({
       data 
    })
    return data
  } 
}