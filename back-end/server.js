//Importe les modules nécessaires 
const http = require('http');
const app = require('./app')

//Initialisation du port du server
const PORT = process.env.PORT || 3000; 

//Creation du server
const server = http.createServer(app);

//En cas d'erreur au demarrage du server
server.on('error', (error) => {
  console.error(`Erreur lors du démarrage du serveur : ${error}`);
});
//Succes du demarrage du server
server.on('listening', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
server.listen(PORT);
