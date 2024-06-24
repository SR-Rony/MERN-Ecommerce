const express = require('express')
const { createCategory, getSingleCategory, getCategory } = require('../../controller/categoryController')
const { validateCategory } = require('../../middlewares/validators/category')
const runValidation = require('../../middlewares/validators')
const { isLoggedIn, isAdmin } = require('../../middlewares/auth')
const categoryRoute = express.Router()

//GET localhost:400/api/v1/category
categoryRoute.get("/",getCategory)

//GET localhost:400/api/v1/category:slug
categoryRoute.get("/:slug",getSingleCategory)

//POST localhost:400/api/v1/category
categoryRoute.post("/",validateCategory,runValidation,isLoggedIn,isAdmin,createCategory)


module.exports = categoryRoute