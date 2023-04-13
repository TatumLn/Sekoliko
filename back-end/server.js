const http = require('http');
const app = require('./app')

const PORT = process.env.PORT || 3000; 

//
const server = http.createServer(app);

//
server.on('error', (error) => {
  console.error(`Erreur lors du démarrage du serveur : ${error}`);
});
//
server.on('listening', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

//
server.listen(PORT);
