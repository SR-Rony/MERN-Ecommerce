const connectDB = require('../config/db');
const app = require('./app');
const { PORT } = require('./secrit');



app.listen(PORT,async()=>{
    console.log(`my server is running at http://localhost:${PORT}`);
    await connectDB()
})