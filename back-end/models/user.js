//Importe les modules mongoose
const mongoose = require('mongoose')

// Définition du modèle utilisateur avec Mongoose
const UserSchema = new mongoose.Schema({
  identifiant: { type: String, 
                  required: true,
                  unique: true},
  password: {type: String, 
                  required: true}
})

//exporte le schema
module.exports = mongoose.model('User',UserSchema);