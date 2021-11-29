const express = require('express')

const enrutador = express.Router();


const db = require('../database')

enrutador.get('/cliente',(req, res) =>{
    db.query('select * from cliente', (err,rows) =>{

        res.json(rows)
    })

})



enrutador.delete('/cliente/:codigo', async (req, res)=> {

    const id = req.params.codigo;
    await db.query('delete from cliente where id_cliente = ?',[id], (err, result) => {
        if (err){
           return console.log ('Algo ocurrio')
        }else{
            res.json('Operacion Exitosa')
        }

    })
})

enrutador.post('/cliente', (req, res) =>{
    const unCliente = req.body;
    db.query('insert into cliente set ?', [unCliente], (err, result) => {
        if(err){
            return console.log('Algo ocurrio!')
        }else{
            res.json("El cliente se inserto exitosamente!")
        }
    })

})

//implementacion y creacion de Ruta cliente - UPDATE
enrutador.put('/cliente/:codigo',async (req, res) => {

    //primer paso: Capturar el codigo
    const id = req.params.codigo

    //segundo paso: Capturar el body es decir, los datos del cliente modificado
    const clienteModificado = req.body;

     await db.query('update cliente set ? where id_cliente = ?', [clienteModificado, id], (err, result) => {

        if(err){
            console.log ('Algo Ocurrio')

        }else{
            //console.log('Operacion Exitosa')
            res.json('Operacion exitosa!') 
        }
    });
});

enrutador.get('/cliente/:codigo', async (req, res) => {

    //capturamos el parametro
    const id = req.params.codigo;

    await db.query('select * from cliente where id_cliente = ?',[id], (err, rows) =>{
        if(err){
            return console.log('Algo ocurrio')
        }else{
            res.json(rows)
        }
    })
});

module.exports = enrutador;