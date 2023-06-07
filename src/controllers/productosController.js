const booksCtrl={}
const books= require('../models/productos.js')

booksCtrl.getBooks= async(req, res)=>{

    const books= await books.find()
    res.json(books)
}
booksCtrl.createBook= async (req, res)=>{
    const newBook= new books(req.body);
    await newBook.save();
    //console.log(newBook);
    res.send({message: 'book created'});
}

booksCtrl.getBooks = async(req, res)=>{
    //console.log(req.params)
    const books= await books.findById(req.params.id);
    res.send(booksF)
}

booksCtrl.deteleBooks = async(req, res)=>{
    const booksF= await books.findByIdAndDelete(req.params.id);
    res.send({message: 'book deleted ', booksF})
}
booksCtrl.updateBooks = async(req, res)=>{
    const booksF= await books.findByIdAndUpdate(req.params.id);
    res.send({message: 'book updated ', booksF})
}



module.exports= booksCtrl;
