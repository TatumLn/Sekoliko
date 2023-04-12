//importer le module bcrypt
const bcrypt = require('bcrypt');
//importer le model de la BD mongoose
const User = require('../models/user')

//Pour l'inscription (SignUp)
exports.ajouter = (req, res, next) => {
  // Validation des données d'entrée
  if (!req.body.identifiant || !req.body.password) {
    return res.status(400).json({ message: 'Veuillez entrer un identifiant et un mot de passe valide.' });
  }
  
  // Vérification si l'identifiant existe déjà dans la base de données
  User.findOne({ identifiant: req.body.identifiant })
    .then(user => {
      if (user) {
        return res.status(409).json({ message: 'L\'identifiant existe déjà.' });
      } else {
        // Hashage du mot de passe avec Bcrypt
        bcrypt.hash(req.body.password, 10)
          .then(hash => {
            // Création d'un nouvel utilisateur
            const newUser = new User({
              identifiant: req.body.identifiant,
              password: hash
            });
            // Sauvegarde de l'utilisateur dans la base de données
            newUser.save()
              .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
              .catch(() => res.status(500).json({ message: 'Utilisateur Non créé !' }));
          })
          .catch(error => res.status(500).json({ error }));
      }
    })
    .catch(error => res.status(500).json({ error }));
};

//Pour la connexion (Login)
exports.connecter = (req, res, next) => {
    if (!req.body.identifiant || !req.body.password) {
        return res.status(400).json({ message: 'Veuillez entrer un identifiant et un mot de passe valide.' });
      }
    //Recherche l'identifiant au BD
    User.findOne({ identifiant: req.body.identifiant })
       .then(user => {
        //Verification si l'utilisateur existe
           if (user === null) {
               return res.status(401).json({ message: 'L\'identifiant n\'existe pas!! '});
           } else{
            //si l'identifiant existe verifier le mot de passe entrer 
           bcrypt.compare(req.body.password, user.password)
               .then(valid => {
                //
                   if (!valid) {
                       return res.status(401).json({ message: 'Mot de passe incorrecte' });
                   }else{
                   //
                   res.status(200).json({
                       userId: user._id,
                       token: 'TOKEN'
                   });
                }
               })
               .catch(error => res.status(500).json({ error }));
       }
    })
       .catch(error => res.status(500).json({ error }));

};