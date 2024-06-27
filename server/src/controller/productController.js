const createError = require("http-errors")
const  slugify = require("slugify")
const Product = require("../models/productModel")
const { successRespons } = require("./respones.controller")
// handle GET product
const handleVewProduct =(req,res,next)=>{
    try {
        res.send('I am a get product')
    } catch (error) {
        next(error)   
    }
}

// hanle create product
const handleCreateProduct = async (req,res,next)=>{
    try {
        const {name,description,price,quantity,shipping,categoryId}=req.body
        console.log(req.body);
       const productSlug = slugify(name)
        const image = req.file?.path; //images path
        if(!image){
            throw createError(409,"images file is require")
        }
        if(image > 1024 * 1024 * 2){
            throw createError(409,"file to large. It must be less than  2MB")
        }

        const productExists = await Product.exists({name:name})
        if(productExists){
            throw createError(409,'Product name already exists')
        }

        const newProduct = await Product.create({
            name:name,
            slug:productSlug,
            description:description,
            price:price,
            quantity:quantity,
            shipping:shipping,
            image:image,
            categoryId:categoryId
        })

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