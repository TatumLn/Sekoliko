//Importe les modules mongoose
const mongoose = require('mongoose')

// Définition du modèle utilisateur avec Mongoose
const UserSchema = new mongoose.Schema({
  identifiant: { type: String, 
                  required: true},
  password: {type: String, 
                  required: true}
})

//export le schema
module.exports = mongoose.model('User',UserSchema);