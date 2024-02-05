import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose'
import chatRouter from './routes/chatRoutes.js'
import userRouter from './routes/userRoute.js'
import messageRouter from './routes/messageRoute.js'

 
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use('/login',userRouter)
// app.use('/chat',chatRouter) 
// app.use('/message',messageRouter)
app.get("/",(req,res)=>{
res.json({message:"hi"})
})
mongoose.connect(process.env.MONGO_URL)

const db= mongoose.connection

db.on('error',console.error.bind(console,"connection error")
)

db.once('open',()=>{
    console.log("mongodb connected"); 
    app.listen(process.env.PORT,()=>{
        console.log("connected TO ",`${process.env.PORT}`);
    })
})