import UserModel from "../models/UserModel.js"

export const postLogin = async(req,res)=>{
    try {
        const {name,email} = req.body
        const newuser = new UserModel({
            name,
            email
        })
        const result = await newuser.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getAllUser = async(req,res)=>{
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}