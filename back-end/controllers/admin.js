//importer le module bcrypt
const bcrypt = require('bcrypt');
//importer le model de la BD mongoose
const Admin = require('../models/admin')

//Pour l'inscription (SignUp)
 exports.creer = (req, res, next) => {
      // Validation des données d'entrée
  if (!req.body.identifiant || !req.body.password) {
    return res.status(400).json({ message: 'Veuillez entrer un identifiant et un mot de passe svp!!' });
    }
          // Hashage du mot de passe avec Bcrypt
          bcrypt.hash(req.body.password, 10)
            .then(hash => {
              // Création d'un nouvel utilisateur
              const newAdmin = new Admin({
                identifiant: req.body.identifiant,
                password: hash
              });
              // Sauvegarde de l'utilisateur dans la base de données
              newAdmin.save()
                .then(() => res.status(201).json({ message: 'Nouvelle Admin ajoutée !' }))
                .catch(() => res.status(500).json({ message: 'Nouvelle Admin Non ajoutée !' }));
            })
            .catch(error => res.status(500).json({ message: 'Impossible d\'ajouté l\'admin !' }));
        }