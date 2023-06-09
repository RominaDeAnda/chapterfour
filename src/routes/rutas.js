const express = require('express');
const router = express.Router();

const booksCtrl= require('../controllers/productosController')
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



//rutas GET
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




//id del libro
router.get('/', booksCtrl.getBooks);

router.get('/:id', booksCtrl.getBooks); 
//ruta POST

//delete
router.delete('/:id', booksCtrl.deleteBooks);

router.put('/:id', booksCtrl.updateBooks);
router.post('/', booksCtrl.createBook);
    
    


//ruta POST 
//contact
router.post('/contact', async (req, res) => {
    const { name, lastName, email, phone, message } = req.body;
  
    try {
      // Crea un nuevo contacto
      const newContact = new Contact({
        name,
        lastname,
        email,
        phone,
        message
      });
  
      //contacto en la base de datos
      await newContact.save();
  
      res.json({ success: true, message: 'Tu mensaje se envió correctamente' });
    } catch (error) {
      console.error('Error al mandar el mensaje', error);
      res.status(500).json({ success: false, message: 'Ha ocurrido un error al enviar el mensaje.' });
    }
});

module.exports = router;


