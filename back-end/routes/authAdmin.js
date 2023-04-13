const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/admin');

//Route pour l'inscription (SignUp)
router.post('/AdminSignup', userCtrl.creer);


module.exports = router;