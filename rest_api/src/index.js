
//GUardo en la constante todo lo que me ofrece Express
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

//inicializa las funcionalidades de express
const server = express();

// Busca un puerto y sino en su defecto usa 30001
server.set('port', process.env.PORT || 3001)

// Formato de datos Json
server.use(express.json());
//para conexiones de clientes Externos
server.use(cors())
//notifica en la consola cada peticion a HTTP
server.use(morgan('dev'))

//Nuestra ruta
server.use(require('./routes/producto.route'));


//Damos arranque a nuestro servidor. 
server.listen(server.get('port') );

//mensaje que muestra el servidor al ejecutarse
console.log(`Servidor Corriendo en el puerto: ${server.get('port')}`)