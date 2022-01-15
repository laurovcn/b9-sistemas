import * as authService from './auth.service'
import createError from 'http-errors'
import { NextFunction, Request, Response } from 'express';
  
    export const register = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const user = await authService.register(request.body);
            response.status(200).json({
                status: true,
                message: 'User created successfully',
                data: user
            })
        }
        catch (e: any) {
            next(createError(e.statusCode, e.message))
        }
    }
    export const login = async (request: Request, response: Response, next: NextFunction) => {
         try {
            const data = await authService.login(request.body)
            response.status(200).json({
                id: data.id,
                email: data.email,
                accessToken: data.accessToken
            })
        } catch (e: any) {
            next(createError(e.statusCode, e.message))
        }
    }

