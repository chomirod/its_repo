const express =require('express');

const router = express.Router();

router.get('/apidb producto', (req,res) => {

    res.json('//Haciendo uso de ruta a traves del metodo Get');

});

router.delete('/apidb producto', (req,res) => {

    res.json ('Eliminaste Producto');
});









module.exports = router; 
