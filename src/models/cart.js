const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    quantity:{type:Number, required:true},
    bookId:{type:String, required:true},
    total:{type:Number, required:true}
},

{
    timestamps:true, 
    versionKey:false
})
module.exports = model('Cart', ProductSchema)
