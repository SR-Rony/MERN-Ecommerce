const {Schema,Model} = require("mongoose")

const categorySchema = new Schema({
    name:{
        type:String,
        required:[true,'category name is required'],
        trim : true,
        unique:true,
        minlangth:[3,'The length of category name can be minimum 3 characters ']
    },
    slug:{
        type:String,
        required:[true,'slug is required'],
        lowercase:true,
        unique:true
    }
},{timestamps:true}

)