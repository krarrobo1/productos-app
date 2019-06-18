const express = require('express');
const router = express.Router();
const { obtenerTodosLosProductos, obtenerProductoPorId } = require('../crud/producto');


router.get('/', async(req, res) => {
    let productos = await obtenerTodosLosProductos();
    res.render('home', { productos });
});

router.get('/update/:id', async(req, res) => {
    let id = req.params.id;
    let producto = await obtenerProductoPorId(id);
    res.render('update', { producto });
})


module.exports = router;