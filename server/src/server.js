require("dotenv").config()
const connectDB = require('./config/db');
const app = require('./app');
// const { serverPort } = require("./secrit");
// const SERVER_PORT =process.env.SERVER_PORT || 3002;
const SERVER_PORT =3000




app.listen(SERVER_PORT ,async()=>{
    console.log(`my server is running at http://localhost:${SERVER_PORT }`);
    await connectDB()
})