const express = require('express');
const router = express.Router();

const libros= require('./books.json');
console.log(libros);


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
