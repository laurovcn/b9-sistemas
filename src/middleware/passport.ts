import { PrismaClient } from '@prisma/client';
var passport = require('passport');
var LocalStrategy = require('passport-local');
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

passport.use(new LocalStrategy(async function verify(email: string, password: string, cb:any) {
  const user = await prisma.users.findUnique({
    where: {email}
  }) 

   const isMatch = await bcrypt.compare(password, password);

    if (user && isMatch === true) {
      const { ...result } = user;
      return result;
    }

    if(!isMatch || !user ) { return await cb(null, false, { message: 'Incorrect email or password.' }); }

   }))

