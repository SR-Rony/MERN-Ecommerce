const createError = require("http-errors");
const Users = require("../models/userModel");

// find user
const findUserService = async(search,limit,page)=>{
    try{
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
        const allUser = await Users.find(filter,userOption)
        .limit(limit)
        .skip( (page-1) * limit)

        // all user count
        const count = await Users.find(filter).countDocuments();

        if(!allUser){
            throw createError(404,'No user found')
        }
        // return success respons users

        return {
                allUser:allUser,
                pasination : {
                    totalPages: Math.ceil(count/limit),
                    currentPages : page,
                    prevPage : page-1 > 0 ? page-1:null,
                    nextPage : page + 1 <= Math.ceil(count/limit) ? page+1 : null
                }
            }
    }    
    catch(error){
        throw error
    }
}

// handle user action
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

module.exports ={handleUserAction,findUserService}