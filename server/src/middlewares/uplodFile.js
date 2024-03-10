const multer = require("multer")
const path = require("path")
const { uplodDir } = require("../secrit")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uplodDir)
    },
    filename: function (req, file, cb) {
        const extname=path.extname(file.originalname)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+extname)
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports = upload