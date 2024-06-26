const createError = require("http-errors")
const  slugify = require("slugify")
const Product = require("../models/productModel")
const deleteImg = require("../helper/deleteImages")

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

// create category service
const updateProductServices = async (req,slug)=>{
    try {
    let updateOptions = {new:true,runValidation:true,context:"query"}
    const product = await Product.findOne({slug:slug})
    let updates ={} //update object

    // input req.body all key
    for(let key in req.body){
        console.log(key);
        if(["name","description","price","quantity","shipping","quantity"].includes(key)){
            updates[key]= req.body[key]
        }
    }

    if(updates.name){
        updates.slug = slugify(updates.name)
    }

    const updateImage = req.file?.path;// images path
    if(updateImage){
        if(updateImage.size > 1024 * 1024 * 2){
            throw createError(409,"file to large. It must be less than  2MB")
        }
        
        updates.image=updateImage //images update
        product.image!=="default.png" && deleteImg(product.image) //images delete
    }
    // user update
    const productUpdate = await Product.findOneAndUpdate({slug},updates,updateOptions)

    if(!productUpdate){
        throw createError(404,"Product not exsist")
    }


    return productUpdate
        
    } catch (error) {
        throw error
    }
}


module.exports = {
    createProductServices,
    updateProductServices
}