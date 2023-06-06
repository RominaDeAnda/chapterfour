const express = require('express');
const router = express.Router();
const User = require('./login');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    //busca el usuario 
    const user = await User.findOne({ email });

    //verifica la existencia del usuario
    if (user && user.comparePassword(password)) {
    

        //si se pudo iniciar sesion
      res.json({ success: true });
    } else {
        //en caso de que no es correcto
      res.json({ success: false });
    }
  } catch (error) {
    console.error('no se pudo solicitar:', error);
    res.status(500).json({ error: 'errorr' });
  }
});

module.exports = router;
