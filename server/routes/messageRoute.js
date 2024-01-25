import { Router } from "express";
import { addMessage, getMessage } from "../controllers/MessageControler.js";

const messageRouter = Router()

messageRouter.post('/',addMessage)
messageRouter.get('/:chatId',getMessage)

export default messageRouter