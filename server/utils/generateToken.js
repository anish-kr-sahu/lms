import jwt from "jsonwebtoken";

export const generateToken = (res, user)=> {
    const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET);
    return res.status(200).cookie("token", token, {httpOnly:true, sameSite:'strict', maxAge:24*60*60*1000}).json({
        user
    });
};