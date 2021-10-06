const express = require ('express')
const cors = require('cors')
const socketio = require ('socket.io')

const server = express()

server.set('port', process.env.PORT || 3000)

server.use(cors())

const servidor = server.listen(server.get('port'), () => {
    console.log ('La conexion fue Exitosa')

});

//le pasamos el servidor a socketio, para habilitar el canal websocket
const io = socketio(servidor)

//establecemos la apertura del canal, para emitir posteriormente
io.on('connection', (socket) => {

    setInterval(() =>{

    socket.emit('dato-socket',Math.random())
    }, 1000)

    socket.on('respuesta', (valor) => {
        console.log(valor)
    });

});
