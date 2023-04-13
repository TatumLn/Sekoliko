//Importe les modules mongoose
const mongoose = require('mongoose')

// Définition du modèle utilisateur avec Mongoose
const AdminSchema = new mongoose.Schema({
  identifiant: { type: String, 
                  required: true},
  password: {type: String, 
                  required: true}
})

//export le schema
module.exports = mongoose.model('Admin',AdminSchema);