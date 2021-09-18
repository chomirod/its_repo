const express =require('express');

const router = express.Router();

const db = require('../database');

router.get('/producto', (req,res) => {

    db.query('select * from producto', (err,rows) => {
         if(!err){
            res.json(rows);
         }else{
             res.json('error al traer datos');
         }
    });
    //res.json('Haciendo uso de ruta a traves del metodo Get');

});

router.delete('/producto/:codigo', async (req,res) => {
    const id = req.params.codigo;
    await db.query('delete from producto where id_producto = ?', [id], (err, result) => {
        if(err){
            return console.log('Algo Ocurrio')
        }else{
            res.json ('Eliminaste Producto');
        }
    })
    
});

router.post('/producto', (req,res) => {
    const unProducto = req.body;
    db.query('insert into producto set ?', [unProducto], (err, result) => {
        if(err){
            return console.log('Algo ocurrio!')
        }else{
            res.json("El Producto se inserto exitosamente")
        }
    })
   
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

router.get('/producto/:codigo', async (req,res) =>{
    const id  = req.params.codigo;
    await db.query('select * from producto where id_producto = ?', [id], (err,rows) => {
        if(err){
            return console.log('Algo Ocurrio')
        }else{
            res.json(rows)
        }
    })
})






module.exports = router; 
