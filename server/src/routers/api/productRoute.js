const express = require('express')
const { handleVewProduct, handleCreateProduct, handleVewSingleProduct, handleDeleteProduct, handleUpdateProduct } = require('../../controller/productController')
const { isLoggedIn, isAdmin } = require('../../middlewares/auth')
const { validateProduct } = require('../../middlewares/validators/product')
const runValidation = require('../../middlewares/validators')
const { uploadProductImage } = require('../../middlewares/uplodFile')
const productRoute = express.Router()

//GET localhost:400/api/v1/product
productRoute.get("/",handleVewProduct)

//GET localhost:400/api/v1/product/:slug
productRoute.get("/:slug",handleVewSingleProduct)

//POST localhost:400/api/v1/product
productRoute.post("/",isLoggedIn,uploadProductImage.single("image"),validateProduct,runValidation,isAdmin,handleCreateProduct)

//UPDATE localhost:400/api/v1/product/slug
productRoute.put("/:slug",handleUpdateProduct)

//DELETE localhost:400/api/v1/product/slug
productRoute.delete("/:slug",isLoggedIn,isAdmin,handleDeleteProduct)

module.exports = productRoute