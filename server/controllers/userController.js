import { User } from "../models/userModel.js";
import  bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";

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

export const logout = async(_,res) => {
    try{
        return res.status(200).cookie("token", "", {MaxAge:0}).json({
            msg: "logout successfully"
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: "Failed to logout"
        })
    }
}


export const getUserProfile = async (req,res) => {
    try{
        const userId = req.id;
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(404).json({
                msg: "User not found"
            })
        }
        return res.status(200).json({
            user
        })
    }catch (error){
        console.log(error);
        return res.status(500).json({
            msg: "Failed to load user"
        })
    }
}


export const updateProfile = async (req,res) => {
    try{
        const userId = req.id;
        const {name} = req.body;
        const profilePhoto = req.file;

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                msg: "User not found"
            })
        }
        // extract the public id of the old image from the url
        if(user.photoUrl){
            const publicId = user.photoUrl.split("/").pop().split(".")[0];
            deleteMediaFromCloudinary(publicId);
        }
        // upload new photo
        const cloudResponse = await uploadMedia(profilePhoto.path);
        const { secure_url: photoUrl } = cloudResponse;
        const updatedData = {name, photoUrl};
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {new:true}).select("-password");
        return res.status(200).json({
            user: updatedUser,
            msg: "Profile updated successfully"
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: "Failed to load user"
        })
    }
}