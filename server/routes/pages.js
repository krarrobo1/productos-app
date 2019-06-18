const express = require('express');
const app = express();
// Engine de plantillas 
const hbs = require('hbs');
const router = express.Router();

//hbs.registerPartials(__dirname + '/views/parciales');
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

//app.use('/', router);

module.exports = app;