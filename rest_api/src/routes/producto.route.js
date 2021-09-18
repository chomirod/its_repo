const express =require('express');

const router = express.Router();

const db = require('../database');

router.get('/producto', (req,res) => {

    db.query('select * from cliente', (err,rows) => {
         if(!err){
            res.json(rows);
         }else{
             res.json('error al traer datos');
         }
    });
    //res.json('Haciendo uso de ruta a traves del metodo Get');

});

router.delete('/producto', (req,res) => {

    res.json ('Eliminaste Producto');
});

router.post('/producto', (req,res) => {
    res.json('Esta ruta almacenara un Producto en la base');
});

router.put('/producto/:codigo', async (req, res) => {
    const id = req.params.codigo
    const productoModificado = req.body;
    await db.query('update cliente set ? where id_producto = ?' , [productoModificado, id],(err, result) => {
        if(err){
            console.log( ' Algo Ocurrio')
        }else{
            console.log('Operacion exitosa.')
            res.json('Esto se actualizara');
        }

    });
    
});






module.exports = router; 
