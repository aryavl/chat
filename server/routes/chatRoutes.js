import {Router} from 'express'
import { createChat, findChat, userChats } from '../controllers/ChatController.js'
const chatRouter= Router()


chatRouter.post('/',createChat) 
// if aa user select a specific user and want to see all the messages 
chatRouter.get('/:userId',userChats)
chatRouter.get('/find/:firstId/:secondId',findChat)

export default chatRouter