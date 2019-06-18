const express = require('express');
const router = express.Router();
const { obtenerTodosLosProductos, obtenerProductoPorId, editarProducto, crearProducto, eliminarProducto } = require('../crud/producto');


router.get('/', async(req, res) => {
    let productos = await obtenerTodosLosProductos();
    res.render('home', { productos });
});

router.get('/producto/:id', async(req, res) => {
    let id = req.params.id;
    let producto = await obtenerProductoPorId(id);
    res.render('update', { producto });
})

router.post('/update/:id', async(req, res) => {
    let id = req.params.id;
    let body = req.body;
    await editarProducto(id, body);
    res.redirect('/')
});

router.post('/create', async(req, res) => {
    let body = req.body;
    await crearProducto(body);
    res.redirect('/');
});

router.get('/delete/:id', async(req, res) => {
    let id = req.params.id;
    await eliminarProducto(id);
    res.redirect('/');

});

module.exports = router;