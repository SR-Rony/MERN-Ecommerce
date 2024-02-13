const createError = require("http-errors")
const User = require("../models/userModel");
const { successRespons } = require("./respones.controller");
const {findWithId } = require("../services/findItem");
const deleteImg = require("../helper/deleteImages");

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

module.exports = {getUsers,getSingleUser,deleteUser}