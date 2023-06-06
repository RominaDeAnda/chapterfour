const {Schema, model} = require('mongoose')

const ProductSchema= new Schema({

    name:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    message:{type:String, required:true}
},{
    timestamps:true, 
    versionKey:false
})
module.exports= model('contact', ProductSchema)