const app = require('./app');
const { PORT } = require('./secrit');




app.listen(PORT,()=>{
    console.log(`my server is running at http://localhost:${PORT}`);
})