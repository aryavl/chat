import { Router } from "express";
import { getAllUser, postLogin } from "../controllers/UserController.js";

const userRouter = Router()

userRouter.post('/',postLogin)
userRouter.get('/users',getAllUser)


export default userRouter