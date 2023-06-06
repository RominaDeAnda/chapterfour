const express = require('express');
const router = express.Router();

const libros= require('./books.json');
console.log(libros);


//requerir
const home =require('./home.json');
    console.log(home);

const books =require('./books.json');
    console.log(books);

const cart =require('./cart.json');
    console.log(cart);

const faq =require('./faq.json');
    console.log(faq);

const about =require('./about.json');
    console.log(about);

const login =require('./login.json');
    console.log(login);

const bookdetails =require('./bookdetails.json');
    console.log(bookdetails);



//rutas 
router.get('/home', (req,res)=>{
    const data = 
    res.json(home);
});

router.get('/about', (req,res)=>{
    const data =
    res.json(about);
});

router.get('/login', (req,res)=>{
    const data =
    res.json(login);
});

router.get('/cart', (req,res)=>{
    const data =
    res.json(cart);
});

router.get('/faq', (req,res)=>{
    const data =
    res.json(faq);
});

router.get('/bookdetails', (req,res)=>{
    const data =
    res.json(bookdetails);
});

router.get('/books', (req,res)=>{
    const data =
    res.json(books);
});




//
router.get('/', (req, res)=>{
    res.json(libros);
});

router.get('/:id', (req, res)=>{
   const {id}= req.params;
    libros.forEach(libro => {
        if(libro.id== id){
            res.json(libro);
            console.log(libro.name);
        }
    });

    console.log(id);
});


router.post('/', (req,res)=>{
    const {name, autor, buyNowLink} =req.body;
    if(name && autor && buyNowLink){
        const id= libros.length +1;
        const nuevoLibro= {...req.body, id};
       libros.push(nuevoLibro);
        // console.log(nuevoLibro);
        res.status(200).json(libros);
    }else{
        res.send("error: no existe libro");
    }
});
    
module.exports = router;


