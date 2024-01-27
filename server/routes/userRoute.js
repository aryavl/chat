import { Router } from "express";
import { getAllUser, getUserById, postLogin } from "../controllers/UserController.js";

const userRouter = Router()

userRouter.post('/',postLogin)
userRouter.get('/users',getAllUser)
userRouter.get('/users/:userId',getUserById)



export default userRouter