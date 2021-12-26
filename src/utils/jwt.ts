import jwt from 'jsonwebtoken'
import createError from 'http-errors'
const accessTokenSecret = "ysecrestr"


export function signAccessToken(payload: any){
    return new Promise((resolve, reject) => {
        jwt.sign({ payload }, accessTokenSecret, {
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
  


    

