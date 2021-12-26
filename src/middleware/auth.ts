import createError from 'http-errors'
import { verifyAccessToken } from '../utils/jwt'

const auth = async (req: any, res: any, next: any) => {

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

export default auth