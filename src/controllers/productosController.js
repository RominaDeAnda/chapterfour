const booksCtrl={}
const books= require('../models/productos.js')

booksCtrl.getBooks=(req, res)=>{res.json(books);}

module.exports= booksCtrl;
