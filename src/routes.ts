import { Router } from "express";
import {CreateUserController} from "./controllers/user/CreateUserController"

const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//     //throw new Error('Throw message of error!')
//     return res.json({ok : true})
// })

//ROTAS USER
router.post('/users', new CreateUserController().handle)

export { router } 