const  slugify = require("slugify")
const Category = require("../models/categoryModel")

const createCategoryServices = async (name)=>{
    const categoryNameSlug = slugify(name)
    const newCategory = await Category.create({
        name:name,
        slug:categoryNameSlug
    })

    return newCategory
}

module.exports = {
    createCategoryServices
}