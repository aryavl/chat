import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    chatId:{
        type:mongoose.Schema.Types.ObjectId
    },
    senderId:{
        type:mongoose.Schema.Types.ObjectId
    },
    text:{
        type:String
    }
},{
    timestamps:true
})

const MessageModel = mongoose.model("Message",MessageSchema)

export default MessageModel