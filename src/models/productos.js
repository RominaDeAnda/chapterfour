const {Schema, model} = require('mongoose')

const ProductSchema= new Schema({

    name:{type:String, required:true},
    autor:{type:String, required:true},
    buyNowLink:{type:String, required:false}
},{
    timestamps:true, 
    versionKey:false
})
module.exports= model('productos', ProductSchema)