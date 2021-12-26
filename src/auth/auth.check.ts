import createError from 'http-errors'
import { verifyAccessToken } from './jwt'

export default class AuthCheck {

  static async auth (req: any, res: any, next: any) {

    if (!req.headers.authorization) {
        return next(new createError.Unauthorized('Access token is required'))
    }

    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return next(new createError.Unauthorized())
    }

    await verifyAccessToken(token).then(user => {
        req.user = user
        next()
    }).catch (e => {
        next(new createError.Unauthorized(e.message))
    })

}
 }
