const createError = require("http-errors")
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

const { successRespons } = require("./respones.controller");
const {findWithId } = require("../services/findItem");
const deleteImg = require("../helper/deleteImages");
const { createJsonWebToken } = require("../helper/jsonwebtoken");
const { jwtActivationKey, clientUrl } = require("../secrit");
const emailNodmailer = require("../helper/email");
const runValidation = require("../middlewares/validators");


//============== user register ============//
const register = async (req,res,next)=>{
    try{
        const {name,email,password,address,phone,image}=req.body;

        const imageSize = req.file.path;

        if(!imageSize){
            throw createError(409,"images file is require")
        }
        if(imageSize > 1024 * 1024 * 2){
            throw createError(409,"file to large. It must be less than  2MB")
        }

        const userExists = await User.exists({email:email})
        if(userExists){
            throw createError(409,"user with this email already exists.please login")
        }
        // create jsonwebtoken 
       const token = createJsonWebToken({name,email,password,address,phone,image},jwtActivationKey,"10m")

        // prepare email
        const emailData = {
            email:email,
            subject:"action activation email",
            html:`
                <h1>Hello ${name}</h1>
                <p>please click hear to <a href="${clientUrl}/api/v1/users/register${token}" target="_blank">activet your email</a></p>
            `
        }
        // send email with nodemailer
        try{
        //    await emailNodmailer(emailData)
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
const userVerify = async (req,res,next)=>{
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
const getUsers = async (req,res,next)=>{
    try{
        // user request
        const search = req.query.search || "";
        const limit = Number(req.query.limit) || 5;
        const page = Number(req.query.page) || 1;
        // serach regexp
        const searchRegexp = new RegExp('.*'+search+'.*',"i")
        // user filter
        const filter = {
            isAdmin : {$ne : true},
            $or : [
                {name: {$regex:searchRegexp}},
                {email: {$regex:searchRegexp}},
                {phone: {$regex:searchRegexp}},
            ]
        }

        const userOption = {password:0}

        // user pagesnation
        const allUser = await User.find(filter,userOption)
        .limit(limit)
        .skip( (page-1) * limit)

        // all user count
        const count = await User.find(filter).countDocuments();

        if(!allUser){
            throw createError(404,'No user found')
        }
        // return success respons users
        return successRespons(res,{
            statusCode :200,
            message : "all user return",
            paylod :{
                allUser,
                pasination : {
                    totalPages: Math.ceil(count/limit),
                    currentPages : page,
                    prevPage : page-1 > 0 ? page-1:null,
                    nextPage : page + 1 <= Math.ceil(count/limit) ? page+1 : null
                }
            }
        })
    }catch(error){
        next(error)
    }
}

//======== single get user=======//
const getSingleUser = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const option = {password:0}
        
        // single user search by id
        let singleUser = await findWithId(User,id,option)

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
const updateUser = async(req,res,next)=>{
    try{
        // const {name,email,password,address,phone,image}=req.body;
    const updateId = req.params.id;
    let updateOptions = {new:true,runValidat:true}
    let updates ={} 

    for(let key in req.body){
        if(["name","password","address","phone"].includes(key)){
            updates[key]=req.body[key]
        }
       else if(["email",].includes(key)){
        throw createError(400,"Email can not be updatead")
        }
    }
    // const image = req.file
    // if(image){
    //     if(image > 1024 * 1024 * 2){
    //         throw createError(409,"file to large. It must be less than  2MB")
    //     }
    //     updates.image=image
    // }

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

//====== delete user =======//
const deleteUser = async(req,res,next)=>{
    try{
    const id = req.params.id;
    // user images delete
    const userImgPath = User.images;
    // delete helper fun()
    await deleteImg(userImgPath)

    //    delete user
       await User.findByIdAndDelete({_id:id,isAdmin:false})

    //======= user delete and success respons fun () =======//
    return successRespons(res,{
        statusCode :200,
        message : " delete",
        paylod :{
            userDelete
        }
    })


    }catch(error){
        next(error)
    }
}
module.exports = {register,getUsers,getSingleUser,deleteUser,userVerify,updateUser}