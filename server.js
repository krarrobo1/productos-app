// Configuracion de la aplicacion
require('./config/config');

const express = require('express');
const hbs = require('hbs');
const pages = require('./routes/pages');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Manejador de MongoDB
const mongoose = require('mongoose');
app.use(express.static(__dirname + '/public'));

// Express.js HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Sirviendo la carpeta public

app.use(pages);

// Coneccion con MongoDB desplegada en Atlas
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true }, (err) => {
    if (err) throw err
    console.log('Conectado');
});

// Inicio de la app 
app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto 3000');
});