const createError = require("http-errors")
const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
const { successRespons } = require("./respones.controller");
const bcrypt = require("bcryptjs");
const { createJsonWebToken } = require("../helper/jsonwebtoken");
const { jwtAccessKey, jwtRefreshKey } = require("../secrit");

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
        // create accesstoken
        const accessToken = createJsonWebToken({user},jwtAccessKey,"2m")

        res.cookie("accessToken",accessToken,{
            mixAge : 2 * 60 * 1000, //15 minutes
            httpOnly : true,
            secure : true,
            sameSite : "none"
        })
         // create refresh token
         const refreshToken = createJsonWebToken({user},jwtRefreshKey,"7d")

         res.cookie("refreshToken",refreshToken,{
             mixAge : 7 * 24 * 60 * 60 * 1000, //7 days
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
//============ user logout ============ 
const handleRefreshToken = async (req,res,next)=>{
    try{
        const oldRefreshToken = req.cookies.refreshToken;
        const decodedToken = jwt.verify(oldRefreshToken,jwtRefreshKey)

         if(!decodedToken){
            throw createError(401,'Invalid refresh token please login again')
         }

         const accessToken = createJsonWebToken(decodedToken.user,jwtAccessKey,"2m")

            res.cookie("accessToken",accessToken,{
                mixAge : 2 * 60 * 1000, //15 minutes
                httpOnly : true,
                secure : true,
                sameSite : "none"
            })

        // user successfull response
        return successRespons(res,{
            statusCode:200,
            message:"User new access token create successfull",
        })
    }catch(error){
        next(error)
    }
}
module.exports = {login,logout,handleRefreshToken}