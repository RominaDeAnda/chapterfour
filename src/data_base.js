const mongoose = require( 'mongoose')

mongoose.connect('mongodb://localhost/chapterfour',{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(dh => console.log('Ya esta conectado'))
.catch((err)=> console.error(err));
