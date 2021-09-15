const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//aca obtengo toda la funcionalidad de express, depositada en la constante serve
const server = express()

//Esta linea de codigo es la q resuelve Json - especificamos el formato de datos que va a manipular nuestro servidor. Nuestra api
server.use(express.json())

// Nos permite comunicar al cliente con el servidor y viceversa
server.use(cors())

//Morgan nos va a notificar en la consola cada vez que se haga una peticion http(put, delete, post, get)
server.use(morgan('dev'))

//seteamos puerto disponible en el sistema.
server.set('port', process.env.PORT || 3000)

//Poner las rutas en funcionamiento
server.use(require('./routes/cliente.routes'))

//le damos arranque a nuestro servidor
server.listen(server.get('port'))

 console.log(`Servidor Corriendo en el puerto: ${server.get('port')}`)