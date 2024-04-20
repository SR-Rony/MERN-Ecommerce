const multer = require("multer")
const path = require("path")
const createError = require("http-errors")
const { uplodDir, fileSize, fileTypes } = require("../config")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uplodDir)
    },
    filename: function (req, file, cb) {
        // const extname=path.extname(file.originalname)
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

  const fileFileter =(req,file,cb)=>{
    const extname =  path.extname(file.originalname);
    if(!fileTypes.includes(file.mimetype)){
    // let error = createError(400,"file type is not allowed")
      return cb(new Error("file typr is not allowed"),false)
    }
    cb(null,true)
  }
  
  const upload = multer({ 
    storage: storage ,
    limits:{fileSize:fileSize},
    fileFileter:fileFileter,
  })
  module.exports = upload