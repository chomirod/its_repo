const express = require ('express')
const cors = require('cors')
const socketio = require ('socket.io')
const os = require('node-os-utils')


//acceder a los recursos
const cpu = os.cpu
const server = express()

server.set('port', process.env.PORT || 3000)

server.use(cors())

const servidor = server.listen(server.get('port'), () => {
    console.log ('La conexion fue Exitosa')

});

//le pasamos el servidor a socketio, para habilitar el canal websocket
const io = socketio(servidor)

//establecemos la apertura del canal, para emitir posteriormente los datos
io.on('connection', (socket) => {

    setInterval(() =>{

    socket.emit('dato-socket',{
        dato:Math.random(),
        nombre:'Romina'
    })
    }, 1000)


    setInterval(() =>{
        cpu.free()
        .then(info =>{
            socket.emit('datos-cpu',
                {
                    descripcion:'CPU FREE',
                    data:info
                }
            )
        });
    }, 1000)

    socket.on('respuesta', (valor) => {
        console.log(valor)
    });

});
