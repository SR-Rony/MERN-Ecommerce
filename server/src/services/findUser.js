const mongoose = require("mongoose")
const createError = require("http-errors")
const Users = require("../models/userModel")

const findUser = async (id)=>{
    try{
        // find option
        const userOption = {password:0}

        // user pagesnation
        const singleUser = await Users.findById(id,userOption)
        
        if(!singleUser){
            throw createError(404,"user dos not exist with by id")
        }
        return singleUser
    }catch(error){
        if(error instanceof mongoose.Error){
            throw createError(404,"Invalid user id")
        }
        return error
    }
}

module.exports = {findUser}