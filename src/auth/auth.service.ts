import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt'
import createError from 'http-errors'
import { signAccessToken }from './jwt'

export default class AuthService {
  
  static async register(data: any) {
        const { email, password } = data;
        data.password = bcrypt.hashSync(data.password, 10);
        let user = prisma.users.create({
            data
        })
        data.accessToken = await signAccessToken(user);

        return data;
    }

    static async login(data: any) {
      const { email, password } = data;
      const users = await prisma.users.findUnique({
          where: {
              email
          }
      });
      if (!users) {
          throw  new createError.NotFound('User not registered')
      }
      const checkPassword = bcrypt.compareSync(password, users.password)
      if (!checkPassword) throw new createError.Unauthorized('Email address or password not valid')
      
      const accessToken = await signAccessToken(users)
      return { ...users, accessToken }
  }
}
