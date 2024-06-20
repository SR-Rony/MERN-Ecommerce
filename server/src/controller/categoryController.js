const slugify = require('slugify')
const Category = require("../models/categoryModel")
const { successRespons } = require("./respones.controller")
const { createCategoryServices } = require('../services/categoryServices')


// GET vew categroy
const vewCategory = async (req,res,next)=>{
    res.send('i am all category')
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
    vewCategory,
    createCategory
}