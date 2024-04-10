const {validationResult} = require("express-validator")
const { errorRespons } = require("../../controller/respones.controller")

const runValidation =(req,res,next)=>{
    try{
        const error = validationResult(req)
        if(!error.isEmpty()){
            console.log(error.array()[0].msg);
            return errorRespons(res,{
                statusCode:422,
                message:error.array()[0].msg
            })
        }
        return next()
    }catch(error){
        return next(error)
    }
}

module.exports =runValidation