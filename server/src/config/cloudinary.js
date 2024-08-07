require("dotenv").config()
const cloudinary = require('cloudinary').v2

 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API, 
    api_secret: process.env.CLOUDINARY_SECRICT_KEY,
 });

 module.exports = cloudinary
