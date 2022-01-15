import { Response, NextFunction } from 'express'
import createError from 'http-errors'
import { verifyAccessToken } from './jwt'

  export const auth = async (request: any, response: Response, next: NextFunction) => {

    if (!request.headers.authorization) {
        return next(new createError.Unauthorized('Access token is required'))
    }

    const token = request.headers.authorization.split(' ')[1]

    if (!token) {
        return next(new createError.Unauthorized())
    }

    await verifyAccessToken(token).then(user => {     
        request.user = user
        next()
    }).catch (e => {
        next(new createError.Unauthorized(e.message))
    })

}

