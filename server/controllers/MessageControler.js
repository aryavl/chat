import MessageModel from "../models/MessageModel.js";

export const addMessage = async(req,res)=>{
    const {chatId,senderId,text} = req.body
    const newMessage = new MessageModel({
        chatId,
        senderId,
        text
    })
    try {
        

            const result = await newMessage.save()
            res.status(200).json(result)
        
    } catch (error) {
        console.error("add message error ",error.message);
        res.status(500).json(error)
    }
}
export const getMessage = async(req,res)=>{
    const { chatId} = req.params
    try {
        const result = await MessageModel.find({chatId})
        res.status(200).json(result)
    } catch (error) {
        console.error("get message error ",error.message);
        res.status(500).json(error)
    }
}