
//funcionalidades que tiene mysql
const mysql = require ('mysql');

// db guarda los parametros de coneccion // credenciales
 const db = mysql.createConnection({
 host:'localhost',
 user:'root',
 password:'',
 database:'api-tp1'


});

db.connect(function(err){
    if(err){
        console.log('error de conexion')
        return;
    }else{
        console.log("La conexion ha sido exitosa!")
    }
});




module.exports = db;

