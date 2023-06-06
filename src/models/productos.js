const {Schema, model} = require('mongoose')

const ProductSchema= new Schema({

    name:{type:String, required:true},
    autor:{type:String, required:true},
    buyNowLink:{type:String, required:true}
},{
    timestamps:true, //agregar tiempo de creación y modif
    versionKey:false
})
module.exports= model('productos', ProductSchema)