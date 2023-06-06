const productosCtrl = {}
const producto = require('../models/cart.js')

cartCtrl.getCart = async (req, res) =>{
    const cart = await cart.find()
    res.json(cart)
}

cartCtrl.createCart = async (req, res) => {
    const newCart = new producto(req.body);
    await newCart.save();
    res.send({message: 'new Cart'})
}

cartCtrl.getCart = async (req, res) =>{
    const cartfind = await cart.findById(req.params.id);
    res.send(cartfind)
}

cartCtrl.deleteCart= async (req, res) =>{
    const cartfind = await cart.findByIdAndDelete(req.params.id);
    res.send({message: 'se eliminó el carro', cartfind})
}

cartCtrl.updateProduct = async (req, res) =>{
    const cartfind = await cart.findByIdAndUpdate(req.params.id, req.body);
    res.send({message: 'se modificó el carro', cartfind})
}

module.exports = cartCtrl;

