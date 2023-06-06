const booksCtrl={}
const books= require('../models/productos.js')

booksCtrl.getBooks= async(req, res)=>{

    const books= await books.find()
    res.json(books)
}

module.exports= booksCtrl;
