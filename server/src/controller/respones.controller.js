// server success respones
const successRespons = (res,{statusCode=500,message= "success",paylod = {}})=>{
    return res.status(statusCode).json({
        success : true,
        message,
        paylod,
    })
}

// server error respones
const errorRespons = (res,{statusCode=500,message= "server error"})=>{
    return res.status(statusCode).json({
        success : false,
        message
    })
}

module.exports = {successRespons,errorRespons}