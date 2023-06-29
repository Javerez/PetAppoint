const express = require('express');
const mysql = require("mysql");
const bodyParser = require('body-parser');
const CryptoJS = require("crypto-js");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
var jsonParser = bodyParser.json()
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'PetAppoint'
});
connection.connect(function (err: any) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

const configuracion = {
    hostname: "127.0.0.1",
    port: 5000,
}
app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})