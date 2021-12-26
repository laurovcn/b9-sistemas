const auth = require('../services/auth.service');
const createError = require('http-errors');

class authController {
    static register = async (req: any, res: any, next: any) => {
        try {
            const user = await auth.register(req.body);
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
            const data = await auth.login(req.body)
            res.status(200).json({
                status: true,
                message: "Account login successful",
                data
            })
        } catch (e: any) {
            next(createError(e.statusCode, e.message))
        }
    }
    static all = async (req: any, res: any, next: any) => {
        try {
            const users = await auth.all();
            res.status(200).json({
                status: true,
                message: 'All users',
                data: users
            })
        }
        catch (e: any) {
            next(createError(e.statusCode, e.message))
        }
    }
}
export default authController;