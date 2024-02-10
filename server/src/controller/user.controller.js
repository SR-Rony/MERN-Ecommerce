const createError = require("http-errors")
const User = require("../models/userModel");
const getUser = async (req,res,next)=>{
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

        // all user respons and pages details
        res.status(200).send({
            message: "user route",
            users : allUser,
            pasination : {
                totalPages: Math.ceil(count/limit),
                currentPages : page,
                prevPage : page-1 > 0 ? page-1:null,
                nextPage : page + 1 <= Math.ceil(count/limit) ? page+1 : null
            }
        })
    }catch(error){
        next(error)
    }
}


module.exports = {getUser}