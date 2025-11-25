import jwt from "jsonwebtoken";

export const isauthenticated = async(req,res, next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                msg: "user not authenticated"
            })
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({
                msg: "Invalid token"
            })
        }
        req.id = decode.userId;
        next();
    } catch(error){
        console.log(error);
        return res.status(401).json({
            msg: "Is not Authenticated"
        })
    }
}