import MessageModel from "../models/MessageModel.js";

export const addMessage = async(req,res)=>{
    const {chatId,senderId,text} = req.body
    console.log(chatId,senderId,text);
    const newMessage = new MessageModel({
        chatId,
        senderId,
        text
    })
    console.log(newMessage);
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
        console.log(result);
        // const result = await MessageModel.aggregate([
        //     {
        //         $match:{chatId:chatId}
        //     },
        // ])
        // console.log(result);
        res.status(200).json(result)
    } catch (error) {
        console.error("get message error ",error.message);
        res.status(500).json(error)
    }
}