//importer le module bcrypt
const bcrypt = require('bcrypt');
//importer le model de la BD mongoose
const User = require('../models/user')
const Admin = require('../models/admin')

//Pour l'inscription (SignUp)

//Etape 1: Verifier si l'identifiant existe deja
exports.checkIdentifiant = (req, res, next) => {
    // Validation des données d'entrée
  if (!req.body.identifiant) {
    return res.status(400).json({ message: 'Veuillez entrer un identifiant' });
  }else{
  
  // Vérification si l'identifiant existe déjà dans la base de données
  User.findOne({ identifiant: req.body.identifiant })
    .then(user => {
      if (user) {
        //True: Si l'utilisateur exist
        return res.status(200).json({ exists: true });
      } else {
        //False: Si l'utilisateur n'existe pas
        return res.status(200).json({ exists: false });
      }
    })
    .catch(error => res.status(500).json({  message: 'Erreur du Serveur.' }));
 }}
//Etape 2:Si l'identifiant n'existe pas inscription reussie
exports.ajouter = (req, res, next) => {
  if (!req.body.password) {
    return res.status(400).json({ message: 'Veuillez entrer un mot de passe' });
  }
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


//Pour la connexion (Login)
exports.connecter = (req, res, next) => {
    if (!req.body.identifiant || !req.body.password) {
        return res.status(400).json({ message: 'Veuillez entrer un identifiant et un mot de passe valide.' });
      }
    //Recherche l'identifiant a la collection User dans ma BD
    User.findOne({ identifiant: req.body.identifiant })
       .then(user => {
        if (!user) {
          // Si aucun utilisateur n'est trouvé dans la collection User, chercher dans la collection Admin
          Admin.findOne({ identifiant: req.body.identifiant })
            .then(admin => {
        //Si aucin utilisateur aussi n'est trouvé dans la collection Admin donc l'user n'existe pas encore
           if (!admin) {
               return res.status(401).json({ message: 'L\'identifiant n\'existe pas!! '});
           } else{
            //si l'identifiant existe dans l'admin comparer le mot de passe entrer avec celui du BD
           bcrypt.compare(req.body.password, admin.password)
               .then(valid => {
                //si le mot de passe est incorrect afficher ceci
                   if (!valid) {
                       return res.status(401).json({ message: 'Mot de passe Admin incorrecte' });
                   }else{
                    // Mot de passe correct, renvoyer le rôle "admin" au front 
                   res.status(200).json({
                       role: 'admin',
                       adminId: admin._id,
                       token: 'TOKEN'
                   });
                }
               })
               .catch(error => res.status(500).json({ error }));
       }
    })
       .catch(error => res.status(500).json({ error }));

}else{ 
        //si l'identifiant existe dans user comparer le mot de passe entrer avec celui du BD
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
              // si le mot de passe est incorrect afficher ceci
            if (!valid) {
                return res.status(401).json({ message: 'Mot de passe Utilisateur incorrecte' });
            }else{
            // Mot de passe correct, renvoyer le rôle "user" au front
            res.status(200).json({
                role: 'user',
                userId: user._id,
                token: 'TOKEN'
            });
        }
        })
        .catch(error => res.status(500).json({ error }));
      }
      })
      .catch(error => res.status(500).json({ error }));

}

//Pour listé

//Pour récupéré leurs nombres