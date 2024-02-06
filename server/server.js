const express = require('express');
const morgan = require('morgan')
const app = express();
const PORT =8000


app.use(morgan("dev"))


app.get("/",(req,res)=>{
    res.status(200).send('welcome to my server')
})

app.listen(PORT,()=>{
    console.log(`my server is running at http://localhost:${PORT}`);
})