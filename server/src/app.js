const express = require('express');
const morgan = require('morgan')
const createError = require('http-errors')
const rateLimit = require('express-rate-limit')
const route = require("../routers/route")
const app = express();

const rateLimiter = rateLimit({
    window : 1* 60 * 1000 ,//1 minute
    max : 5,
    message : "sorry please try again"

})



app.use(rateLimiter)
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// api routers
app.use(route)


app.get("/",(req,res)=>{
    res.status(200).send('welcome to my server')
})

// client error
app.use((req,res,next)=>{
    next(createError(404,"404 page is not found"))
})

// server all error handle
app.use((err,req,res,next)=>{
    return res.status(err.status || 500).send({
        success:false,
        message:err.message
    })
})

module.exports = app;