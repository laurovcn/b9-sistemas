import jwt from 'jsonwebtoken'
import createError from 'http-errors'

const accessTokenSecret = "ysecrestr"
const tokenExpiration = '1h'

export function signAccessToken(payload: any){
    return new Promise((resolve, reject) => {
        jwt.sign({ payload, expiresIn: tokenExpiration }, accessTokenSecret, {
        }, (err, token) => {
            if (err) {
            reject(new createError.InternalServerError())
            }
            resolve(token)
        })
    })
}
export function verifyAccessToken(token: string){
    return new Promise((resolve, reject) => {
        jwt.verify(token, accessTokenSecret, (err, payload) => {
            if (err) {
                const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
                return reject(new createError.Unauthorized(message))
            } 
            resolve(payload)
        })
    })
}
  


    

