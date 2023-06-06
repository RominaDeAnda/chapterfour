const user = require('../models/login');

const loginCtrl = {};

loginCtrl.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'no se encuentra el usuario' });
    }
    const match = await user.comparePassword(password);

    if (!match) {
      return res.status(401).json({ error: 'contraseña incorrecta' });
    }

    //si se pudo iniciar sesion
    res.json({ success: true });
  } catch (error) {
    console.error('no se pudo solicitar:', error);
    res.status(500).json({ error: 'error' });
  }
};

module.exports = loginCtrl;
