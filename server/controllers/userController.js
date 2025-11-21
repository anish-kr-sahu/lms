import { User } from "../models/userModel.js";
import  bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async(req,res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                msg: "All fields are required"
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                msg: "User already exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            msg: "Account Created Successfully"
        })
    }catch(error){
       return res.status(500).json({
        msg: "failed to create account"
       })
    }
}

export const login = async(req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                msg: "All fields are required"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                msg: "user not exist"
            })
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword){
            return res.status(400).json({
                msg: "Password is InCorrect"
            })
        }
      generateToken(res, user);  
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Login failed"
        })
    }
}