import { Router } from "express";
import {CreateUserController} from "./controllers/user/CreateUserController"
import {AuthUserController} from './controllers/user/AuthUserController'

const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//     //throw new Error('Throw message of error!')
//     return res.json({ok : true})
// })

//ROTAS USER
router.post('/users', new CreateUserController().handle)
router.post('/sessions', new AuthUserController().handle)

export { router } 