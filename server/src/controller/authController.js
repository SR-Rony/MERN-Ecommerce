const createError = require("http-errors")
const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
const { successRespons } = require("./respones.controller");
const bcrypt = require("bcryptjs");
const { createJsonWebToken } = require("../helper/jsonwebtoken");
const { jwtAccessKey } = require("../secrit");

//============ user login ============ 
const login = async (req,res,next)=>{
    try{
        // email and password req.body
        const {email,password} = req.body;
        // isExist
        const user = await Users.findOne({email:email})
        if(!user){
            throw createError(404,"User does not exist with this email. please registeer first")
        }

        // user password chack
        const passwordChack = await bcrypt.compare(password,user.password);
        if(!passwordChack){
            throw createError(401,"Password did not match")
        }
        // user isbanned
        if(user.isBanned){
            throw createError(403,"You are banned . please contact authority")
        }
        // create  token
        const accessToken = createJsonWebToken({_id:user._id},jwtAccessKey,"15m")

        res.cookie("accessToken",accessToken,{
            mixAge : 15 * 60 * 1000, //15 minutes
            httpOnly : true,
            secure : true,
            sameSite : "none"
        })


        // user successfull response
        return successRespons(res,{
            statusCode:200,
            message:"User login successfully",
            paylod : user
        })
    }catch(error){
        next(error)
    }
}
//============ user logout ============ 
const logout = async (req,res,next)=>{
    try{
        res.clearCookie("accessToken")
        // user successfull response
        return successRespons(res,{
            statusCode:200,
            message:"User logout successfully",
        })
    }catch(error){
        next(error)
    }
}

module.exports = {login,logout}