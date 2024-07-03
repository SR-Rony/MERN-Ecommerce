require("dotenv").config()
const cloudinary = require('cloudinary').v2

 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME || "dyz5nmpem",
    api_key: process.env.CLOUDINARY_API || "915723259535686", 
    api_secret: process.env.CLOUDINARY_SECRICT_KEY || "ay2AUC3_H_e2sYvvDVCZAlJMFk8" // Click 'View Credentials' below to copy your API secret
 });

 module.exports = cloudinary
