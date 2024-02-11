const mongoose = require("mongoose")
const createError = require("http-errors")
const Users = require("../models/userModel")

const findWithId = async (id,option={})=>{
    try{
        const item = await Users.findById(id,option)
        
        if(!item){
            throw createError(404,"item dos not exist with by id")
        }
        return item
    }catch(error){
        if(error instanceof mongoose.Error){
            throw createError(404,"Invalid item id")
        }
        return error
    }
}

module.exports = {findWithId}