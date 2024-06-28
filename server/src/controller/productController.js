const createError = require("http-errors")
const  slugify = require("slugify")
const Product = require("../models/productModel")
const { successRespons } = require("./respones.controller")
const { createProductServices } = require("../services/productServices")
// handle GET product
const handleVewProduct = async(req,res,next)=>{
    try {
        const allProducts = await Product.find()
        if(!allProducts){
            throw createError(404,'All product not vew')
        }
         // success response message
         return successRespons(res,{
            statusCode:201,
            message:'All product vew successfull',
            paylod:allProducts
        })
    } catch (error) {
        next(error)   
    }
}

// hanle create product
const handleCreateProduct = async (req,res,next)=>{
    try {
        const {name,description,price,quantity,shipping,categoryId}=req.body
        console.log(req.body);
        const image = req.file?.path; //images path
        if(!image){
            throw createError(409,"images file is require")
        }
        if(image > 1024 * 1024 * 2){
            throw createError(409,"file to large. It must be less than  2MB")
        }

        const newProduct = await createProductServices(name,description,price,quantity,shipping,categoryId,image)

        
        // success response message
        return successRespons(res,{
            statusCode:201,
            message:'Product was create successfull',
            paylod:newProduct
        })
    } catch (error) {
        next(error)
    }



}


module.exports = {
    handleVewProduct,
    handleCreateProduct
}