const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    price:{type:Number, required:true},
    bookId:{type:String, required:true},
    quantity:{type:Number, required:true},
    total:{type:Number, required:true}
},

{
    timestamps:true, 
    versionKey:false
})
module.exports = model('Cart', ProductSchema)
