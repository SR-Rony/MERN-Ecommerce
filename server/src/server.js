const app = require('./app');
const PORT =8000



app.listen(PORT,()=>{
    console.log(`my server is running at http://localhost:${PORT}`);
})