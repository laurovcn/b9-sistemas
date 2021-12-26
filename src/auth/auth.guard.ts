import AuthService from './auth.service'
import createError from 'http-errors'

export default class AuthGuard {
  
    static register = async (req: any, res: any, next: any) => {
        try {
            const user = await AuthService.register(req.body);
            res.status(200).json({
                status: true,
                message: 'User created successfully',
                data: user
            })
        }
        catch (e: any) {
            next(createError(e.statusCode, e.message))
        }
    }
    static login = async (req: any, res: any, next: any) => {
         try {
            const data = await AuthService.login(req.body)
            res.status(200).json({
                status: true,
                message: "Account login successful",
                data
            })
        } catch (e: any) {
            next(createError(e.statusCode, e.message))
        }
    }
}
