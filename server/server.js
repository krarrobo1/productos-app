// Configuracion de la aplicacion
require('./config/config');

const express = require('express');

const pages = require('./routes/pages');
//const router = require('./routes/producto');
const app = express();

// Manejador de MongoDB
const mongoose = require('mongoose');

const bodyParser = require('body-parser');




// Sirviendo la carpeta public
app.use(express.static(__dirname + '/public'));

// Express.js HBS engine
app.use(pages);







// Coneccion con MongoDB desplegada en Atlas
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true }, (err) => {
    if (err) throw err
    console.log('Conectado');
});

// Inicio de la app 
app.listen(process.env.PORT, () => {
    console.log('Nodejs escuchando el puerto 3000');
});