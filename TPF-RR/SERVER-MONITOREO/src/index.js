const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const socketio = require('socket.io')
const os = require('node-os-utils').os
const osu = require('node-os-utils')
const netstat = osu.netstat;
const nodeDiskInfo = require('node-disk-info');
const server = express()
const cpu = osu.cpu
const mem = osu.mem



server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.set('port', process.env.PORT || 3003)

const servidor = server.listen(server.get('port'), () => {
    console.log(`CONEXION EXITOSA EN EL PUERTO ${server.get('port')}`)
});

const io = socketio(servidor)

server.use(require('./routes/cliente.route'))


//establecemos la apertura del canal, para emitir posteriormente los datos
io.on('connection', (socket) => {

    setInterval(() =>{

        socket.emit('dato-socket',{
            dato:Math.random(),
            //nombre:'Romina'
        })
    }, 1000);


    setInterval(() =>{
        cpu.free()
            .then(info =>{
                socket.emit('datos-cpu',{
                    descripcion:'CPU Disponible',
                    data:info
                })
        })
    },1000);

    setInterval( () =>{
        cpu.usage()
            .then(info =>{
                 socket.emit('uso-cpu',{
                    descripcion:'Uso de CPU',
                    data:info + " " + "%"
                })
        })
    },1000)


        const cpu_count = cpu.count()
        //console.log(cpu_count)
       
        socket.emit('contar-cpu',{
                descripcion:'Contador de CPU',
                data:cpu_count
        })
      


 
        const cpu_modelo = cpu.model()
  
        socket.emit('modelo-cpu', {
                descripcion:'Modelo de CPU',
                data:cpu_modelo
        })
      
        // Info Memoria
        mem.info()
        .then(info => {
            socket.emit('mem-info',
            {
                
              descripciontmem: 'Memoria total',
              datatmem: info.totalMemMb + " " + "Mb",
              descripcionfmem:'Memoria disponible',
              datafmem: info.freeMemMb + " " + "Mb" ,
              descripcionumem: 'Memoria utilizada',
              dataumem: info.usedMemMb + " " + "Mb",   
              
            })
        });

        //Info Disco
        nodeDiskInfo.getDiskInfo()
        .then(info => {
            socket.emit('disk-info',
            {
                descripciontotal: 'Espacio Total',
                datatotal: (info[0].blocks/1073741824).toFixed(2) + ' ' + 'GB',
                descripcionfree: 'Espacio Disponible',
                datafree: (info[0].available/1073741824).toFixed(2) + ' ' + 'GB' ,
                descripcionused: 'Espacio Utilizado',
                dataused: (info[0].used/1073741824).toFixed(2) + ' ' + 'GB',
                descripcionperc: 'Espacio utilizado (%)',
                dataperc: info[0].capacity
            })
        });

        // Sistema Operativo
        const oos = os.type()
        //console.log(oos)
        socket.emit('os-oos',{
             descripcion: 'Sistema Operativo',
            data: oos
        });
        

        //Nombre del Equipo
        const host = os.hostname()
            socket.emit('os-hostname',{
                descripcion: 'Nombre del Equipo',
                data: host
        });

        //Arquitectura
        const arch  = os.arch()
        //console.log(arch)
        socket.emit('os-arch',{
            descripcion: 'Arquitectura del Sistema',
            data: arch
        });
        

        //Netstat
        setInterval(() =>{
            netstat.inOut()
                .then(info =>{
                    socket.emit('netstat-eth0',{
                        descripcionInp:'InputMb eth0',
                        data:'',
                        descripcionOut:'OutputMb eth0',
                        data:''
                    })
            })
        },1000);
        // -- NETSTAT NO ANDA --//
        netstat.stats()
        .then(info => {
            socket.emit('netstat-la',
            {
                descripcionlainput: 'Input interfaz: lo',
                datalainput: info[0].inputBytes,
                descripcionlaoutput: 'Output interfaz: lo',
                datalaouput: info[0].outputBytes
            })
    });

});



