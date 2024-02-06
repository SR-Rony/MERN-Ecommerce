const express = require('express');
const morgan = require('morgan')
const app = express();
const PORT =8000


app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.status(200).send('welcome to my server')
})

// client error
app.use((req,res,next)=>{
    res.status(404).send({
        message:"404 page is not found"
    })
})

// server error
app.use((err,req,res,next)=>{
    res.status(500).send({
        message:"server is brock"
    })
})


app.listen(PORT,()=>{
    console.log(`my server is running at http://localhost:${PORT}`);
})