const createError = require("http-errors");
const Users = require("../models/userModel");

const handleUserAction =async(userId,action)=>{
    try {
        let successMessages;
        let update
        if(action=="ban"){
            update = {isBanned:true}
            successMessages = "User is banned successfull"
        }else if(action=="unban"){
            update = {isBanned:false}
            successMessages = "User is unbanned successfull"
        }else{
            throw createError(404,"Invalid action")
        }
         let updateOptions = {new:true,runValidation:true,context:"query"}
        // user update
        const userUpdate = await Users.findByIdAndUpdate(userId,update,updateOptions)
        .select("-password")

    if(!userUpdate){
        throw createError(404,"User not banned successfully")
    }
    return successMessages
    } catch (error) {
        throw error
    }
} 

module.exports ={handleUserAction}