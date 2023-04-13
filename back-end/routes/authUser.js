const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//Route pour l'inscription (SignUp)
router.post('/signupUser', userCtrl.ajouter);
//Route pour la connexion (Login)
router.post('/checkIdentifiant', userCtrl.checkIdentifiant);
router.post('/', userCtrl.connecter);


module.exports = router;