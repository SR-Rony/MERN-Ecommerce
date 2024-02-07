const mongoose = require("mongoose")
const { mongosseUrl } = require("../src/secrit")


const connectDB = async()=>{
    try{
        await mongoose.connect(mongosseUrl)

        console.log('server is connect');

        mongoose.connection.on("error",(error)=>{
            console.error('server is not connect',error)
        })
    }catch(error){
        console.error(`error hear : ${error}`);
    }
}

module.exports = connectDB