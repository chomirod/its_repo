const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'monitoreo_db'
});

db.connect(function(err){
    if(err){
        console.log('error de conexion')
        return;
    }else{
        console.log('La conexion fue exitosa')
    }
});

module.exports = db;