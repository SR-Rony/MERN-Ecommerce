const slugify = require('slugify')
const Category = require("../models/categoryModel")
const { successRespons } = require("./respones.controller")
const { createCategoryServices } = require('../services/categoryServices')


// GET vew categroy
const getCategory = async (req,res,next)=>{
    const category = await Category.find({}).select('name slug').lean()
    // success response
    successRespons(res,{
        statusCode:200,
        message:"vew all category",
        paylod:category
    })
}

// GET vew single categroy
const getSingleCategory = async (req,res,next)=>{
    const {slug} = req.params
    const singleCategory = await Category.find({slug})
    // success response
    successRespons(res,{
        statusCode:200,
        message:`vew single category`,
        paylod:singleCategory
    })
}

// POST create category
const createCategory = async(req,res,next)=>{
   try {
    const {name} = req.body
    const newCategory = await createCategoryServices(name)
    // success Respons
   return successRespons(res,{
        statusCode:200,
        message:'new category create successfull',
        paylod:newCategory
    })

   } catch (error) {
       next(error)
   }
}


module.exports = {
    getCategory,
    getSingleCategory,
    createCategory
}