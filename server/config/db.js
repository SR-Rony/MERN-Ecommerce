const mongoose = require("mongoose")
const { mongosseUrl } = require("../src/secrit")


const connectDB = async()=>{
    try{
        await mongoose.connect(mongosseUrl)

        console.log('server is connect');

        mongoose.connection.on("error",(error)=>{
            console.error('server is not connect')
        })
    }catch(error){
        // console.error(`error hear : ${error}`);
        console.error(`error hear :`);
    }
}

module.exports = connectDB