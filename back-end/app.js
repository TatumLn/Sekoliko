// importez les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// créez une instance de l'application Express
const app = express();
// Active CORS pour toutes les requêtes
app.use(cors());

// configurez les routes de l'API
const userRoutes = require('./routes/auth');

//
const dotenv = require('dotenv');
dotenv.config();
//
const URL=process.env.MONGO_URL

const mongoose = require('mongoose')
// Connexion à la base de données MongoDB
mongoose.connect(URL)
.then(() => console.log('Connexion à la base de données réussie'))
.catch(error => console.log(error))

// configurez le middleware body-parser pour parser le corps des requêtes en objet JSON
app.use(bodyParser.json());

app.use('/api/auth', userRoutes);

// exporte l'application pour une utilisation ultérieure
module.exports = app;
