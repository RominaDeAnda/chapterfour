require('./data_base')
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


//port
app.set('port', 3000);
app.set('json spaces', 2);


// Middlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use(cors());

//rutas
app.use('/api/libros', require('./routes/rutas'));

//empieza el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");