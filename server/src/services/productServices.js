const createError = require("http-errors")
const  slugify = require("slugify")
const Product = require("../models/productModel")

// create category service
const createProductServices = async (name,description,price,quantity,shipping,categoryId,image)=>{

    const productExists = await Product.exists({name:name})
        if(productExists){
            throw createError(409,'Product name already exists')
        }

        const newProduct = await Product.create({
            name:name,
            slug: slugify(name),
            description:description,
            price:price,
            quantity:quantity,
            shipping:shipping,
            image:image,
            categoryId:categoryId
        })


    return newProduct
}


module.exports = {
    createProductServices,
}