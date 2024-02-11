const createError = require("http-errors")
const User = require("../models/userModel");
const { successRespons } = require("./respones.controller");
const { findUser } = require("../services/findUser");

// get all users
const getUsers = async (req,res,next)=>{
    try{
        const search = req.query.search || "";
        const limit = Number(req.query.limit) || 2;
        const page = Number(req.query.page) || 1;

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

// single get user
const getSingleUser = async (req,res,next)=>{
    try{
        const id = req.params.id;
        
        let singleUser = await findUser(id)

        return successRespons(res,{
            statusCode :200,
            message : "single user is return",
            paylod :{
                user:singleUser
            }
        })
    }catch(error){
        next(error)
    }
}



module.exports = {getUsers,getSingleUser}