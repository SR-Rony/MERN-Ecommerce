const createError = require("http-errors")
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

const { successRespons } = require("./respones.controller");
const {findWithIdService } = require("../services/findItem");
const deleteImg = require("../helper/deleteImages");
const { createJsonWebToken } = require("../helper/jsonwebtoken");
const { jwtActivationKey, clientUrl, } = require("../secrit");
const emailNodmailer = require("../helper/email");
const { findUserService, forgetPasswordService, resetPasswordService, UserActionService, updatePasswordService } = require("../services/userServices");


//============== user register ============//
const handleRegister = async (req,res,next)=>{
    try{
        const {name,email,password,address,phone,}=req.body;

        const image = req.file?.path; //images path
        if(!image){
            throw createError(409,"images file is require")
        }
        if(image > 1024 * 1024 * 2){
            throw createError(409,"file to large. It must be less than  2MB")
        }
        // email exisits chack
        const userExists = await User.exists({email:email})
        if(userExists){
            throw createError(409,"user with this email already exists.please login")
        }
        // create jsonwebtoken 
       const token = createJsonWebToken({name,email,password,address,phone,image:image},jwtActivationKey,"10m")

        // prepare email
        const emailData = {
            email:email,
            subject:"action activation email",
            html:`
                <h1>Hello ${name}</h1>
                <p>please click hear to <a href="${clientUrl}/api/v1/users/register${token}" target="_blank">activet your email</a></p>
            `
        }
        try{
            // send email with nodemailer
           await emailNodmailer(emailData)
        }catch(emailError){
            next(createError(500,"fail to verification email "))
            return
        }
        //    success respons function
        return successRespons(res,{
            statusCode:200,
            message:`please go to your ${email} for compleating your registaion prosses`,
            paylod :{
                token:token
            }
        })

    }catch(error){
        next(error)
    }
}

//============== user verify ============//
const handleUserVerify = async (req,res,next)=>{
    try{
        // user token
        const token = req.body.token;
        // token error throw
        if(!token){
            throw createError(404,"token is not found")
        }

        try{
            // token verify data
            const decoded = jwt.verify(token,jwtActivationKey)
            if(!decoded){
                throw createError(401,"user is not a verify")
            }
            // user exists error
            const userExists = await User.exists({email:decoded.email})
            if(userExists){
                throw createError(409,"user with this email already exists.please login")
            }
            // new user is create
            await User.create(decoded)
            
            //success respons function
            return successRespons(res,{
                statusCode:200,
                message:`user is a register successfull`,
            })
            // all error
        }catch(error){
            if(error.name=="tokenExpiredError"){
                throw createError(404,"token has expired")
            }else if(error.name=="jsonWebTokenError"){
                throw createError(401,"invalid token")
            }else{
                throw error
            }
        }

    }catch(error){
        next(error)
    }
}

//======== get all users ========//
const handleGetUsers = async (req,res,next)=>{
    try{
        // user request
        const search = req.query.search || "";
        const limit = Number(req.query.limit) || 5;
        const page = Number(req.query.page) || 1;
       const {allUser,pasination}= await findUserService(search,limit,page)
        // return success respons users
        return successRespons(res,{
            statusCode :200,
            message : "all user return",
            paylod :{
                allUser:allUser,
                pasination : pasination
            }
        })
    }catch(error){
        next(error)
    }
}

//======== single get user=======//
const handleGetSingleUser = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const option = {password:0}
        
        // single user search by id
        let singleUser = await findWithIdService(User,id,option)

        // user success respons 
        return successRespons(res,{
            statusCode :200,
            message : "single user is return",
            paylod :{
                singleUser
            }
        })
    }catch(error){
        next(error)
    }
}

//====== update user =======//
const handleUpdateUser = async(req,res,next)=>{
    try{
    const updateId = req.params.id;
    const option = {password:0};
    const user = await findWithIdService(User,updateId,option)

    let updateOptions = {new:true,runValidation:true,context:"query"}

    let updates ={} //update object

    // input req.body all key
    for(let key in req.body){
        console.log(key);
        if(["name","password","address","phone",].includes(key)){
            updates[key]=req.body[key]
        }
       else if(["email"].includes(key)){
        throw createError(400,"Email can not be updatead")
        }
    }

    const updateImage = req.file?.path;// images path
    if(updateImage){
        if(updateImage.size > 1024 * 1024 * 2){
            throw createError(409,"file to large. It must be less than  2MB")
        }
        
        updates.image=updateImage //images update
        user.image!=="default.png" && deleteImg(user.image) //images delete
    }
    // user update
    const userUpdate = await User.findByIdAndUpdate(updateId,updates,updateOptions)
    .select("-password")

    if(!userUpdate){
        throw createError(404,"User not exsist")
    }

    //======= user delete and success respons fun () =======//
    return successRespons(res,{
        statusCode :200,
        message : " update",
        paylod :userUpdate
    })
    }catch(error){
        next(error)
    }
}
//====== ban user =======//
const handleManageUser = async(req,res,next)=>{
    try{
    const userId = req.params.id;
    const action = req.body.action
   let successMessages = await UserActionService(userId,action)

    //======= user delete and success respons fun () =======//
    return successRespons(res,{
        statusCode :200,
        message : successMessages
    })


    }catch(error){
        next(error)
    }
}
// ======user new password set=========//
const handleUpdatePassword =async(req,res,next)=>{
    try {
        const updateId = req.params.id
        const {email,oldPassword,newPassword,confirmPassword} = req.body
        const updateUser =  updatePasswordService (updateId,email,oldPassword,newPassword,confirmPassword)

        //======= user delete and success respons fun () =======//
        return successRespons(res,{
            statusCode :200,
            message : "password update successfull",
            paylod:updateUser
        })
    } catch (error) {
        next(error)
    }
}

// ======user forgate password set=========//
const handleForgatePassword =async(req,res,next)=>{
    try {
        const {email} = req.body
        const token = await forgetPasswordService(email)
        //======= user delete and success respons fun () =======//
        return successRespons(res,{
            statusCode :200,
            message : `Plase got to your ${email} resetion the password`,
            paylod:{token:token}
        })
    } catch (error) {
        next(error)
    }
}

// ======user reset password set=========//
const handleResetPassword =async(req,res,next)=>{
    try {
        const {token,newpassword} = req.body
        const userData = await resetPasswordService(token,newpassword)
        //======= user delete and success respons fun () =======//
        return successRespons(res,{
            statusCode :200,
            message : `Reset password successfull`,
            paylod:userData
        })
    } catch (error) {
        next(error)
    }
}

//====== delete user =======//
const handleDeleteUser = async(req,res,next)=>{
    try{
    const id = req.params.id;
    const option = {password:0}
    const user = await findWithIdService(User,id,option)
    //    delete user
       await User.findByIdAndDelete({_id:id,isAdmin:false})

    //======= user delete and success respons fun () =======//
    return successRespons(res,{
        statusCode :200,
        message : " delete",
        paylod :{
            user:user
        }
    })


    }catch(error){
        next(error)
    }
}

module.exports = {
    handleRegister,
    handleGetUsers,
    handleGetSingleUser,
    handleDeleteUser,
    handleUserVerify,
    handleUpdateUser,
    handleManageUser,
    handleUpdatePassword,
    handleForgatePassword,
    handleResetPassword
}