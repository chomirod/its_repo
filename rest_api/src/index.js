
//GUardo en la constante todo lo que me ofrece Express
const express = require('express');

//inicializa las funcionalidades de express
const server = express();

// Busca un puerto y sino en su defecto usa 30001
server.set('port', process.env.PORT || 3001)

// Formato de datos Json
server.use(express.json());

server.use(require('./routes/producto.route'));



//Damos arranque a nuestro servidor. 
server.listen(server.get('port') );


console.log('servidor corriendo en el puerto ', server.get('port'));