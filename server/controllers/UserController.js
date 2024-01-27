import UserModel from "../models/UserModel.js"

export const postLogin = async(req,res)=>{
    try {
        const {name,email} = req.body
        const user = await UserModel.findOne({email})
        // console.log("userrr==>",user);
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json({message:"User is not registered"})
        }
        
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

export const getUserById = async(req,res)=>{
    try {
        const user = await UserModel.findOne({_id:req.params.userId})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

