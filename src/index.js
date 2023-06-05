const express = require('express');
const morgan = require('morgan');
const app = express();


//port
app.set('port', 3000);
app.set('json spaces', 2);


// Middlewares
app.use(morgan('dev')); 
app.use(express.json());

//rutas
app.use('/api/libros', require('./routes/rutas'));

//empieza el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");