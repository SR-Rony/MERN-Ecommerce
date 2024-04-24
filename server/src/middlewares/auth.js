const createError = require("http-errors")
const jwt =require("jsonwebtoken");
const { jwtAccessKey } = require("../secrit");
//  user is login chack
 const isLoggedIn = async (req,res,next)=>{
    try{
        const token = req.cookies.accessToken;
        if(!token){
            throw createError(401,"Access token not found. Please login")
        }
        const decoded = jwt.verify(token,jwtAccessKey)
        if(!decoded){
            throw createError(401,"Invalid access token . please login again")

        }
        req.body.userId = decoded._id
        next()
        
    }catch(error){
        return next(createError(403,"access Token not found"))
    }
 }
 
 module.exports = {isLoggedIn}