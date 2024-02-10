const userModel = require("../models/user.model")
const data = require("../data")

const seedUser = async(req,res,next)=>{
    try{

        // delete all user
       await userModel.deleteMany({})
        // create user
        const newUser =await userModel.insertMany(data.users)
        return res.status(201).json(newUser)
    }catch(error){
        next(error)
    }
}

module.exports = seedUser