# Sekoliko
Gestion d'une école (Avec TechJS)
IGGLIA 3 2022-2023

//Pour le front 
npm i -g @Vue/Cli
Choisir l'installation manuelle et installer Babel,typescript, Router, Vuex, Eslint.
npm i bootstrap (pour installer bootstrap)

//Pour le back
Npm init dans le dossier back-end
Npm i express, bcrypt, body-parser, cors, dotenv, mongoose (pour installer tout les modules indispensable au projet)
Créer un cluster en ligne avec mongoDBAtlas sur le site MongoDB
créer un fichier .env dans notre dossier back-end et y mettre le lien suivant:
 #URL MongoBD
MONGO_URL='mongodb+srv://<Nom_D'UtilisateurMongoDBAtlas>:<Mot_De_PasseMongoDBAtlas>@<Nom_Du_ClusterMongoDBAtlas>.43upeaa.mongodb.net/<Nom_De_la_BDMongoBDAtlas(Ou on veut stocker notre données)>?retryWrites=true&w=majority'

NB:
On a séparé front et le back dans deux dossiers différents dans ce projet d'ou d'un côté il faut lancé le front avec la commande: 
npm run serve 
et d'un autre côté le back pour obtenir la réponse avec la commande:
npm start
