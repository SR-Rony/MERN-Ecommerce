const express = require('express')
const { handleVewProduct, handleCreateProduct } = require('../../controller/productController')
const { isLoggedIn, isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/uplodFile')
const { validateProduct } = require('../../middlewares/validators/product')
const runValidation = require('../../middlewares/validators')
const productRoute = express.Router()

//GET localhost:400/api/v1/product
productRoute.get("/",handleVewProduct)

//POST localhost:400/api/v1/product
productRoute.post("/",isLoggedIn,upload.single("image"),validateProduct,runValidation,isAdmin,handleCreateProduct)

module.exports = productRoute